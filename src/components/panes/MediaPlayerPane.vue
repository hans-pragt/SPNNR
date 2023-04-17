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

    <v-btn
      @click      = "pickWinner();"
    >
      Spin
    </v-btn>

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