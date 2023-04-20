<template>

  <Pane
    title     = "Twitch.tv"
    color     = "#00a8cc"
  >

    <!-- Address Bar -->
    <div class="pa-2 toolbar">

      <v-text-field
        variant   = "outlined"
        density   = "compact"
        hide-details
        readonly
        value     = "twitch.tv/prxzm"
        bg-color  = "#fbeac9"
      >
      </v-text-field>

    </div>

    <div class="divider"></div>

    <a 
      href    = "https://www.twitch.tv/prxzmlive"
      target  = "_blank"
    >
      <img src="public/images/twitch_stream.png">
    </a>

  </Pane>

</template>

<script setup lang="ts">

// #region Imports

/* SPNNR */
import Pane from '../common/Pane.vue';

// #endregion Imports

</script>

<style scoped lang="scss">

.toolbar {
  border-bottom:      2px solid black;
}

img {
  width:              100%;
  margin-bottom:      -12px;     // Not sure why, but this fixes a gap.
}

</style>