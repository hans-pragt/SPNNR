<template>
  <v-sheet
    class           = "pane"
  >

    <!-- Header -->
    <div
      class     = "header text-h6"
      :style    = "{ backgroundColor: headerColor }"
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

// #region Props

interface PaneProps {
  title : string;
  headerColor : string;
}

const props = defineProps<PaneProps>();

// #endregion Props

</script>

<style scoped lang="scss">

.pane {
  background-color:   #f4ebda;

  border:             2px solid black;
  border-radius:      12px;

  box-shadow:         4px 4px 0px 0px rgba(0,0,0,1);

  display:            flex;
  flex-direction:     column;

  .header {
    background-color: #85CBD9;
    border-bottom:    2px solid black;
    border-radius:    10px 10px 0 0;

    padding:          0px 12px;
  }
  
  .contents {
    flex:       1;
  }
}

</style>