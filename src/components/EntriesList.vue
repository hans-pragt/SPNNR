<template>
  <div>

    <!-- Input Field -->
    <v-text-field
      label     = "entry"
      variant   = "outlined"

      v-model        = "newEntry"
      @keydown.enter = "insertNewEntry();"
    >
    </v-text-field>

  </div>
</template>

<script setup lang="ts">

// #region Imports

/* SPNNR */
import { useEntriesStore } from '@/stores/entries.store';

/* Pinia */
import { storeToRefs } from 'pinia';

// #endregion Imports

// #region New Entry

const { newEntry } = storeToRefs(useEntriesStore())
const { insertNewEntry } = useEntriesStore();

// #endregion New Entry

</script>