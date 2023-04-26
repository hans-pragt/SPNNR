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

    <div class="container">

      <!-- Background -->
      <a 
        href    = "https://www.twitch.tv/prxzmlive"
        target  = "_blank"
      >
        <img src="public/images/stream.jpg">
      </a>

      <!-- Nick -->
      <div 
        v-if    = "nickSays" 
        class   = "nick speech_bubble"
      >
        {{ nickSays }}
      </div>

      <!-- Emma -->
      <div 
        v-if    = "emmaSays" 
        class   = "emma speech_bubble"
      >
        {{ emmaSays }}
      </div>

    </div>
    
  </Pane>

</template>

<script setup lang="ts">

// #region Imports

/* Vue */
import { computed, type ComputedRef } from 'vue';

/* Pinia */
import { storeToRefs } from 'pinia';

/* SPNNR */
import Pane from '../common/Pane.vue';
import {
 TEXTFIELD_BG_COLOR,
 TWITCH_PANE_COLOR
} from '@/constants';
import { useEntriesStore } from '@/stores';

// #endregion Imports

// #region Speech Bubbles

const { history } = storeToRefs(useEntriesStore());

const nickSays : ComputedRef<string> = computed(() => {
  if (history.value.length === 0) {
    return '';
  }

  let offsetFromEnd = 2;
  if (history.value.length % 2 !== 0) {
    offsetFromEnd = 1;
  }

  return history.value[history.value.length - offsetFromEnd].contents;
});

const emmaSays : ComputedRef<string> = computed(() => {
  if (history.value.length <= 1) {
    return '';
  }

  let offsetFromEnd = 2;
  if (history.value.length % 2 === 0) {
    offsetFromEnd = 1;
  }

  return history.value[history.value.length - offsetFromEnd].contents;
});

// #endregion Speech Bubbles

</script>

<style scoped lang="scss">

.toolbar {
  border-bottom:      2px solid black;
}

.container {

  img {
    width:              100%;
    margin-bottom:      -12px;     // Not sure why, but this fixes a gap.
  }

  position:       relative;
  .speech_bubble {
    position:           absolute;

    text-align:         center;
    font-family:        'VT323';
    font-size:          24px;

    &.nick {
      top:                0px;
      right:              20px;
      width:              160px;
      background-image:   url('/images/speech_bubble_nick.png');
    }

    &.emma {
      top:                100px;
      right:              4px;
      width:              120px;
      background-image:   url('/images/speech_bubble_emma.png');
    }
  }

}

</style>