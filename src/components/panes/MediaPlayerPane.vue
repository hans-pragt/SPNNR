<template>

  <Pane
    title     = "Media Player"
    color     = "#fb9700"
  >

    <div class="pa-4">

      <!-- Record -->
      <Record
        class     = "d-flex justify-center"
        :radius   = "400"
        :entries  = "entries"
      >
      </Record>

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

const { entries } = storeToRefs(useEntriesStore());

// #endregion Entries

</script>