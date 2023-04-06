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

    <v-list
      lines = "one"
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

  </div>
</template>

<script setup lang="ts">

// #region Imports

/* SPNNR */
import { useEntriesStore } from '@/stores';

/* Pinia */
import { storeToRefs } from 'pinia';

// #endregion Imports

// #region Entries

const { newEntry, entries } = storeToRefs(useEntriesStore())
const { insertNewEntry, removeEntry } = useEntriesStore();

// #endregion Entries

</script>