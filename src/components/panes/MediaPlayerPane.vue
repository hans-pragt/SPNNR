<template>

  <Pane
    title     = "Media Player"
    color     = "#fb9700"
  >

    <div class="pa-4">

      <!-- Record -->
      <Record
        class     = "d-flex justify-center"
        :radius   = "300"
        :entries  = "entries"
        :current  = "winner"
      >
      </Record>

    </div>

    <div class="pa-4 text-center controls">

      <!-- Nudge to Previous -->
      <v-btn
        icon
        color       = "#fb9700"
        :disabled   = "!canSpin"
        @click      = "onSkipToPrevious();"
      >
        <v-icon>mdi-skip-previous</v-icon>
      </v-btn>

      <!-- Pick -->
      <v-btn
        class       = "mx-2"
        icon
        color       = "#fb9700"
        size        = "large"
        :disabled   = "!canSpin"
        @click      = "pickWinner();"
      >
        <v-icon>mdi-play</v-icon>
      </v-btn>

      <!-- Nudge to Next -->
      <v-btn
        icon
        color       = "#fb9700"
        :disabled   = "!canSpin"
        @click      = "onSkipToNext();"
      >
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>

    </div>

  </Pane>

</template>

<script setup lang="ts">

// #region Imports

/* Vue */
import type { ComputedRef } from 'vue';
import { computed } from 'vue';

/* Pinia */
import { storeToRefs } from 'pinia';

/* SPNNR */
import Pane from '../common/Pane.vue';
import Record from './MediaPlayerPane/Record.vue';
import { useEntriesStore, useRecordStore } from '@/stores';

// #endregion Imports

// #region Entries

const { entries, winner } = storeToRefs(useEntriesStore());
const { pickWinner } = useEntriesStore();

// #endregion Entries

// #region Record

const { angle, isSpinning } = storeToRefs(useRecordStore());
const canSpin : ComputedRef<boolean> = computed(() => entries.value.length > 0 && !isSpinning.value);

function onSkipToPrevious() {
  isSpinning.value = true;
  const arc = 360 / entries.value.length;
  angle.value -= arc;
}

function onSkipToNext() {
  isSpinning.value = true;
  const arc = 360 / entries.value.length;
  angle.value += arc;
}

// #endregion Record

</script>

<style scoped>

.controls {
  border-top: 2px solid black;
}

</style>