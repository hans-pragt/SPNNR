<template>

  <Pane
    title   = "To Do"
    :color  = "TODO_LIST_PANE_COLOR"
  >
    
    <div class="pa-2 toolbar">

      <!-- Entry Input -->
      <v-text-field
        variant   = "outlined"
        density   = "compact"
        hide-details
        :bg-color = "TEXTFIELD_BG_COLOR"

        v-model        = "newEntry"
        @keydown.enter = "insertNewEntry();"
      >
      </v-text-field>

      <v-btn
        icon      = "mdi-playlist-plus"
        variant   = "text"
        :disabled = "!newEntry"
        @click    = "insertNewEntry();"
      >
      </v-btn>

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
import {
  TODO_LIST_PANE_COLOR,
  TEXTFIELD_BG_COLOR
} from '@/constants'

// #endregion Imports

// #region Entries

const { newEntry, entries } = storeToRefs(useEntriesStore())
const { insertNewEntry, removeEntry } = useEntriesStore();

// #endregion Entries

</script>

<style scoped lang="scss">

.toolbar {
  display:          flex;
  flex-direction:   row;

  border-bottom:    2px solid black;
}

.entries-list {
  min-height:       400px;
  max-height:       400px;
  overflow:         auto;
}

// Override the default style of any scrollbar in the contents of this pane:



</style>