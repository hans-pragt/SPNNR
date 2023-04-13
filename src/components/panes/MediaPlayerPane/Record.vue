<template>

  <div class="container">
    <canvas
      ref       = "canvas"
      :width    = "properties.radius * 2"
      :height   = "properties.radius * 2"
    >
    </canvas>
  </div>

</template>

<script setup lang="ts">

//https://github.com/XiaoLin1995/vue-fortune-wheel/blob/master/src/components/fortuneWheel/index.vue

// #region Imports

/* Vue */
import type { Ref } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';

/* SPNNR */
import { 
  clear,
  renderLabel,
  renderVinyl,
  renderSlices
} from './utilities/rendering.utilities';
import type { Entry } from '@/models';

// #endregion Imports

// #region Properties

interface RecordProperties {
  radius : number;
  entries? : Array<Entry>;
};

const properties = withDefaults(
  defineProps<RecordProperties>(),
  {
    radius:     100,
    entries:    () => []
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

// #endregion Rendering

</script>