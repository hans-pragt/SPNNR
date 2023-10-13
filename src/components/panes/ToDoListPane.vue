<template>

  <Pane
    title   = "To Do"
    :color  = "theme.todoPaneHeaderColor"
  >
    
    <div class="contents">

      <div class="pa-2 entry">

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
        >

        <v-list-item-title
          class   = "entry-title"
          @click  = "isEditing = entry.id;"
        >

          <template
            v-if    = "isEditing !== entry.id"
          >
            {{ entry.contents }}
          </template>

          <v-text-field
            v-else
            ref         = "contentsField"
            variant     = "outlined"
            density     = "compact"
            hide-details
            autofocus
            :bg-color   = "TEXTFIELD_BG_COLOR"
            v-model:model-value = "entry.contents"
            @input      = "updateContents(entry.id, $event.target.value);"
            @blur       = "isEditing = undefined"
          >

          </v-text-field>          
        </v-list-item-title>

          <template v-slot:append>

            <!-- Hide Item -->
            <v-btn
              :icon     = "entry.visible ? 'mdi-eye' : 'mdi-eye-off'"
              variant   = "text"
              @click    = "toggleEntryVisibility(entry.id)"
            >
            </v-btn>

            <!-- Remove Item -->
            <v-btn
              icon      = "mdi-delete"
              variant   = "text"
              @click    = "removeEntry(entry.id);"
            >
            </v-btn>

          </template>

        </v-list-item>
      </v-list>

      <div class="px-4 controls">

        <span class="count">
          {{ entriesMessage }}
        </span>

        <v-btn
          icon    = "mdi-delete-sweep"
          variant = "text"
          @click  = "removeAllEntries();"
        >
        </v-btn>
      </div>

    </div>

  </Pane>

</template>

<script setup lang="ts">

// #region Imports

/* Vue */
import type { ComputedRef, Ref } from 'vue';
import { computed, ref } from 'vue';

/* Pinia */
import { storeToRefs } from 'pinia';

/* SPNNR */
import Pane from '../common/Pane.vue';
import { useEntriesStore, useThemesStore } from '@/stores';
import { TEXTFIELD_BG_COLOR } from '@/constants'

// #endregion Imports

// #region Theme

const { theme } = storeToRefs(useThemesStore());

// #endregion Theme

// #region Entries

const { newEntry, entries } = storeToRefs(useEntriesStore())
const { 
  insertNewEntry, 
  removeEntry, 
  removeAllEntries,
  updateContents,
  toggleEntryVisibility
} = useEntriesStore();

const entryCount : ComputedRef<number> = computed(() => entries.value.length);
const entriesMessage : ComputedRef<string> = computed(() => {
  if (entryCount.value === 1) {
    return '1 Entry';
  } else if (entryCount.value > 1) {
    return `${entryCount.value} Entries`;
  } else {
    return 'No Entries';
  }
});

// #endregion Entries

// #region Editing

const isEditing : Ref<string | undefined> = ref(undefined);

// #endregion Editing

</script>

<style scoped lang="scss">

.contents {
  height:         100%;
  display:        flex;
  flex-direction: column;

  .entry {
    display:          flex;
    flex-direction:   row;

    border-bottom:    2px solid black;
  }

  .entries-list {
    flex:             1;
    overflow:         auto;

    .entry-title {
      cursor:           pointer;
    }
  }

  .controls {
    border-top:     2px solid black;
    display:        flex;
    flex-direction: row;
    align-items:    center;

    .count {
      flex:         1;
    }
  }

}

// Override the default style of any scrollbar in the contents of this pane:



</style>