<template>

  <div 
    class           = "container"
    :style          = "rotationStyle"
    @transitionend  = "onRotateEnded"
  >
    <canvas
      ref       = "canvas"
      :width    = "properties.radius * 2"
      :height   = "properties.radius * 2"
    >
    </canvas>
  </div>

</template>

<script setup lang="ts">

// #region Imports

/* Vue */
import type { Ref } from 'vue';
import { computed, onMounted, ref, watch } from 'vue';

/* Pinia */
import { storeToRefs } from 'pinia';

/* SPNNR */
import { 
  clear,
  renderLabel,
  renderVinyl,
  renderSlices
} from './utilities/rendering.utilities';
import type { Entry } from '@/models';
import { useEntriesStore, useRecordStore } from '@/stores';

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

onMounted(() => render());

// #endregion Life-Cycle

// #region Rendering

const canvas : Ref<HTMLCanvasElement | undefined> = ref(undefined);

function render() {
  const context : CanvasRenderingContext2D | null | undefined = canvas.value?.getContext('2d');
  if (!context) {
    return;
  }

  clear(context);
  renderVinyl(context, properties.radius);
  renderSlices(context, properties.radius, properties.entries.map(e => e.contents));
  renderLabel(context, properties.radius);
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
      ((arc * index) + (arc / 2)) -         // Angle to the entry
      (Math.PI / 2);                        // Make entry land on top

    angle.value = angleInRads * (180 / Math.PI);
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