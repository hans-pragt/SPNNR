<template>

  <Pane
    title     = "Media Player"
    :color    = "MEDIA_PLAYER_PANE_COLOR"
  >

    <div class="container">

      <div class="pa-4 record">

        <!-- Record -->
        <Record
          class     = "d-flex justify-center"
          :radius   = "300"
          :entries  = "visibleEntries"
          :current  = "winner"
        >
        </Record>

      </div>

      <div class="pa-4 text-center controls">

        <!-- Nudge to Previous -->
        <v-btn
          icon        = "mdi-skip-previous"
          elevation   = "0"
          :color      = "MEDIA_PLAYER_PANE_COLOR"
          :disabled   = "!canSpin"
          @click      = "onSkipToPrevious();"
        >
        </v-btn>

        <!-- Pick -->
        <v-btn
          class       = "mx-2"
          elevation   = "0"
          icon        = "mdi-play"
          :color      = "MEDIA_PLAYER_PANE_COLOR"
          size        = "large"
          :disabled   = "!canSpin"
          @click      = "pickWinner();"
        >
        </v-btn>

        <!-- Nudge to Next -->
        <v-btn
          icon        = "mdi-skip-next"
          elevation   = "0"
          :color      = "MEDIA_PLAYER_PANE_COLOR"
          :disabled   = "!canSpin"
          @click      = "onSkipToNext();"
        >
        </v-btn>

      </div>
    </div>

    <!-- Show the Latest Winning Entry -->
    <NotificationDialog
      :winner = "lastWinner"
    >
    </NotificationDialog>

  </Pane>

</template>

<script setup lang="ts">

// #region Imports

/* Vue */
import type { ComputedRef } from 'vue';
import { computed, ref } from 'vue';

/* Pinia */
import { storeToRefs } from 'pinia';

/* Hotkeys */
import type { HotKey } from 'vue3-hotkey';
import useHotkey from 'vue3-hotkey'

/* SPNNR */
import type { Entry } from '@/models';

import Pane from '../common/Pane.vue';
import Record from './MediaPlayerPane/Record.vue';
import NotificationDialog from './MediaPlayerPane/NotificationDialog.vue';

import { useEntriesStore, useRecordStore } from '@/stores';
import { MEDIA_PLAYER_PANE_COLOR } from '@/constants';
import { isFromInputField } from './MediaPlayerPane/utilities/hotkeys.utilities';

// #endregion Imports

// #region Hotkeys

const hotkeys = ref<Array<HotKey>>([
  {
    keys: ['space'],
    handler(keys, event) {
      if (!isFromInputField(event) && canSpin.value) {
        pickWinner();
      }
    }
  }
]);

useHotkey(hotkeys.value);

// #endregion Hotkeys

// #region Entries

const { entries, winner } = storeToRefs(useEntriesStore());
const { pickWinner } = useEntriesStore();

const visibleEntries : ComputedRef<Array<Entry>> = computed(() => entries.value.filter(entry => entry.visible));

// #endregion Entries

// #region Record

const { angle, isSpinning } = storeToRefs(useRecordStore());
const canSpin : ComputedRef<boolean> = computed(() => visibleEntries.value.length > 0 && !isSpinning.value);

function onSkipToPrevious() {
  isSpinning.value = true;
  const arc = 360 / visibleEntries.value.length;
  angle.value -= arc;
}

function onSkipToNext() {
  isSpinning.value = true;
  const arc = 360 / visibleEntries.value.length;
  angle.value += arc;
}

// #endregion Record

// #region Winners

const { history } = storeToRefs(useEntriesStore());

const lastWinner : ComputedRef<Entry | undefined> = computed(() => {
  const historicalEntries = history.value;
  if (!historicalEntries?.length) {
    return undefined;
  }

  return historicalEntries[historicalEntries.length - 1];
});

// #endregion Winners

</script>

<style scoped lang="scss">

.container {
  display:        flex;
  flex-direction: column;
  height:         100%;

  .record {
    flex:         1;
  }

  .controls {
    border-top: 2px solid black;
  }
}

</style>