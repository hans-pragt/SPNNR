<template>

  <div
    class     = "container"
  >

    <!-- Stationary -->
    <div 
      class           = "canvas"
    >
      <canvas
        ref       = "stationary_canvas"
        :width    = "properties.radius * 2"
        :height   = "properties.radius * 2"
      >
      </canvas>
    </div>

    <!-- Spinning -->
    <div 
      class           = "canvas"
      :style          = "rotationStyle"
      @transitionend  = "onRotateEnded"
    >
      <canvas
        ref       = "spinning_canvas"
        :width    = "properties.radius * 2"
        :height   = "properties.radius * 2"
      >
      </canvas>
    </div>

    <!-- Stem -->
    <div
      class       = "canvas"
    >
      <canvas
        ref       = "stem_canvas"
        :width    = "properties.radius * 2"
        :height   = "properties.radius * 2 + 75"
      >
      </canvas>
    </div>

  </div>

</template>

<script setup lang="ts">

// #region Imports

/* Vue */
import type { Ref } from 'vue';
import { computed, ref, watch } from 'vue';

/* Pinia */
import { storeToRefs } from 'pinia';

/* SPNNR */
import { 
  clear,
  renderLabel,
  renderVinyl,
  renderSlices,
  renderStem
} from './utilities/rendering.utilities';
import type { Entry } from '@/models';
import { useEntriesStore, useRecordStore, useThemesStore } from '@/stores';

// #endregion Imports

// #region Properties

interface RecordProperties {
  entries? : Array<Entry>;
  current? : Entry,
  radius : number;
  duration? : number;
  spins? : number;
};

const properties = withDefaults(
  defineProps<RecordProperties>(),
  {
    entries:    () => [],
    current:    undefined,
    radius:     100,
    duration:   5,
    spins:      10
  }
);

// #endregion Properties

// #region Life-Cycle

// Tried putting this in onmounted, but the fonts have not loaded at that point.
window.onload = () => render();

// #endregion Life-Cycle

// #region Rendering

const { theme } = useThemesStore();
const coverIndex = Math.floor(Math.random() * theme.coverPaths.length);
const cover = theme.coverPaths[coverIndex];
console.log(cover);

function render() {
  renderStationaryCanvas();
  renderSpinningCanvas();
  renderStemCanvas();
}

const stationary_canvas : Ref<HTMLCanvasElement | undefined> = ref(undefined);

function renderStationaryCanvas() {
  const context : CanvasRenderingContext2D | null | undefined = stationary_canvas.value?.getContext('2d');
  if (!context) {
    return;
  }

  clear(context);
  renderVinyl(context, properties.radius);
}

const spinning_canvas : Ref<HTMLCanvasElement | undefined> = ref(undefined);

function renderSpinningCanvas() {
  const context : CanvasRenderingContext2D | null | undefined = spinning_canvas.value?.getContext('2d');
  if (!context) {
    return;
  }

  clear(context);
  renderSlices(context, properties.radius, properties.entries.map(e => e.contents));
  renderLabel(context, properties.radius, cover);
}

const stem_canvas : Ref<HTMLCanvasElement | undefined> = ref(undefined);

function renderStemCanvas() {
  const context : CanvasRenderingContext2D | null | undefined = stem_canvas.value?.getContext('2d');
  if (!context) {
    return;
  }

  clear(context);
  renderStem(context, properties.radius);
}

watch(
  () => properties.entries,
  () => render()
);

// #endregion Rendering

// #region Rotation

const { angle, isSpinning } = storeToRefs(useRecordStore());
const { saveToHistory } = useEntriesStore();

watch(
  () => properties.current,
  () => {
    isSpinning.value = true;

    const index = properties.entries.findIndex(e => e.id === properties.current?.id);
    const arc = (2 * Math.PI) / properties.entries.length;
    const angleInRads = 
      (properties.spins * (2 * Math.PI)) +  // Number of spins
      (Math.PI * 2) - ((arc * index))         // Angle to the entry

    angle.value = angleInRads * (180 / Math.PI);

    // Play audio sound:
    const scratch = new Audio(theme.recordSpinAudioPath);
    scratch.play();
  }
);

const rotationDuration = computed(() => {
  return isSpinning.value ? properties.duration : 0;
});

const rotationStyle = computed(() => ({
  'transform':              `rotateZ(${angle.value}deg)`,    // If we used rads here it does not do full rotations.
  'transition-duration':    `${rotationDuration.value}s`,
  'transition-function':    'cubic-bezier(0.36, 0.95, 0.64, 1)'
}));

function onRotateEnded() {
  isSpinning.value = false;

  // Since the duration is 0 while not rotating, there won't be a visible spin:
  angle.value = angle.value % 360;

  if (!!properties.current) {
    saveToHistory(properties.current);
  }
}

// #endregion Rotation

</script>

<style scoped lang="scss">

.container {
  position:     relative;
  height:       100%;

  .canvas {
    position:     absolute;
    top:          0;
    right:        0;
    bottom:       0;
    left:         0;

    display:          flex;
    align-items:      center;
    justify-content:  center;
  }
}

</style>