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
      >
        <v-icon>mdi-skip-previous</v-icon>
      </v-btn>

      <!-- Pick -->
      <v-btn
        class       = "mx-2"
        icon
        color       = "#fb9700"
        size        = "large"
        @click      = "pickWinner();"
      >
        <v-icon>mdi-play</v-icon>
      </v-btn>

      <!-- Nudge to Next -->
      <v-btn
        icon
        color       = "#fb9700"
      >
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>

    </div>

  </Pane>

</template>

<script setup lang="ts">

// #region Imports

/* Pinia */
import { storeToRefs } from 'pinia';

/* SPNNR */
import Pane from '../common/Pane.vue';
import Record from './MediaPlayerPane/Record.vue';
import { useEntriesStore } from '@/stores';

// #endregion Imports

// #region Entries

const { entries, winner } = storeToRefs(useEntriesStore());

// #endregion Entries

// #region Selection

const { pickWinner } = useEntriesStore();

// #endregion Selection

</script>

<style scoped>

.controls {
  border-top: 2px solid black;
}

</style>