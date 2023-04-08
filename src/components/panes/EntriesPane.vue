<template>

  <Pane
    title       = "Entries"
    headerColor = "green"
  >
    
    <!-- Entry Input -->
    <v-text-field
      label     = "entry"
      variant   = "outlined"

      v-model        = "newEntry"
      @keydown.enter = "insertNewEntry();"
    >
    </v-text-field>

    <v-list
      lines     = "one"
      bgColor   = "transparent"
    >
      <v-list-item
        v-for     = "entry of entries"
        :key      = "entry.id"
        :title    = "entry.contents"
      >

        <!-- Remove Item -->
        <template v-slot:append>
          <v-btn
            icon      = "mdi-delete"
            variant   = "text"
            @click    = "removeEntry(entry.id);"
          ></v-btn>
        </template>

      </v-list-item>
    </v-list>

  </Pane>

</template>

<script setup lang="ts">

// #region Imports

/* Pinia */
import { storeToRefs } from 'pinia';

/* SPNNR */
import Pane from '../common/Pane.vue';
import { useEntriesStore } from '@/stores';

// #endregion Imports

// #region Entries

const { newEntry, entries } = storeToRefs(useEntriesStore())
const { insertNewEntry, removeEntry } = useEntriesStore();

// #endregion Entries

</script>