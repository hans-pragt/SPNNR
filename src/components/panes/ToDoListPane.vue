<template>

  <Pane
    title   = "To Do"
    color   = "#03c498"
  >
    
    <div class="pa-2 toolbar">

      <!-- Entry Input -->
      <v-text-field
        variant   = "outlined"
        density   = "compact"
        hide-details
        bg-color  = "#fbeac9"

        v-model        = "newEntry"
        @keydown.enter = "insertNewEntry();"
      >
      </v-text-field>

    </div>

    <v-list
      class     = "entries-list"
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

<style scoped lang="scss">

.toolbar {
  border-bottom:      2px solid black;
}

.entries-list {
  min-height:       400px;
  max-height:       400px;
  overflow:         auto;
}

// Override the default style of any scrollbar in the contents of this pane:



</style>