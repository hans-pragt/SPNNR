<template>
  <v-sheet
    class      = "pane"
    :style     = "cssVariables"
  >

    <!-- Header -->
    <div
      class     = "header text-h6"
    >
      {{ props.title }}
    </div>

    <!-- Contents -->
    <div
      class     = "contents"
    >
      <slot></slot>
    </div>

  </v-sheet>
</template>

<script setup lang="ts">

// #region Imports

/* Vue */
import { computed } from 'vue';

// #endregion Imports

// #region Props

interface PaneProps {
  title : string;
  color : string;
}

const props = defineProps<PaneProps>();

// #endregion Props

// #region CSS

const cssVariables = computed(() => ({
  '--pane-color': props.color
}));

// #endregion CSS

</script>

<style scoped lang="scss">

.pane {
  background-color:   #f4ebda;

  border:             2px solid black;
  border-radius:      12px;

  box-shadow:         4px 4px 0px 0px rgba(0,0,0,1);

  display:            flex;
  flex-direction:     column;
  overflow: hidden;

  .header {
    background-color: var(--pane-color);
    border-bottom:    2px solid black;

    padding:          0px 12px;
  }
  
  .contents {
    flex:       1;

    ::-webkit-scrollbar {
      border-left:  1px solid black;
    }

    ::-webkit-scrollbar-track {
      background:   transparent;
    }

    ::-webkit-scrollbar-thumb {
      background:   var(--pane-color);
      border-left:  1px solid black;
    }
  }
}

</style>