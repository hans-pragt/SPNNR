<template>

  <Pane
    title     = "Twitch.tv"
    :color    = "TWITCH_PANE_COLOR"
  >

    <!-- Address Bar -->
    <div class="pa-2 toolbar">

      <v-text-field
        variant   = "outlined"
        density   = "compact"
        hide-details
        readonly
        value     = "twitch.tv/prxzmlive"
        :bg-color = "TEXTFIELD_BG_COLOR"
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
import {
 TEXTFIELD_BG_COLOR,
 TWITCH_PANE_COLOR
} from '@/constants';

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