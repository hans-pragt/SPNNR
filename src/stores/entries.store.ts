// #region Imports

/* Pinia */
import { defineStore } from 'pinia';

/* UUID */
import { v4 } from 'uuid';

/* Vue */
import type { Ref } from 'vue';
import { ref } from 'vue';

/* SPNNR */
import type { Entry } from '@/models';

// #endregion Imports

export const useEntriesStore = defineStore(
  'entries',
  () => {

    // #region Current Entry

    const newEntry : Ref<string> = ref('');
    
    // #endregion Current Entry

    // #region Entries

    const entries : Ref<Array<Entry>> = ref([]);

    function insertNewEntry() {
      if (!newEntry.value) {
        return;
      }

      entries.value = [
        ...entries.value,
        {
          id:       v4(),
          contents: newEntry.value,
          visible:  true
        }
      ];

      // Reset for next entry:
      newEntry.value = '';
    }

    function updateContents(entryId : string, contents : string) {
      const entryIndex = entries.value.findIndex(e => e.id === entryId);
      if (entryIndex < 0) {
        return;
      }

      const entry = entries.value[entryIndex];

      entries.value.splice(
        entryIndex,
        1,
        {
          ...entry,
          contents
        }
      );
    }

    function toggleEntryVisibility(entryId : string) {
      const entryIndex = entries.value.findIndex(e => e.id === entryId);
      if (entryIndex < 0) {
        return;
      }

      const entry = entries.value[entryIndex];

      entries.value.splice(
        entryIndex,
        1,
        {
          ...entry,
          visible: !entry.visible
        }
      );
    }

    function removeEntry(id : string) {
      entries.value = entries.value.filter(e => e.id !== id);
    }

    function removeAllEntries() {
      entries.value = [];
    }

    // #endregion Entries

    // #region Picking

    const winner : Ref<Entry | undefined> = ref(undefined);

    function pickWinner() {
      winner.value = { ...getRandomEntry(entries.value) };
    }

    // #endregion Picking

    // #region History

    const history : Ref<Array<Entry>> = ref([]);

    function saveToHistory(entry : Entry) {
      history.value = [
        ...history.value,
        {
          ...entry
        }
      ];
    }

    // #endregion History

    return {

      newEntry,
      insertNewEntry,
      updateContents,
      toggleEntryVisibility,
      removeEntry,
      removeAllEntries,

      winner,
      pickWinner,

      history,
      saveToHistory,

      entries,

    }

  }
);

function generateEntry(contents : string) : Entry {
  return {
    id:       v4(),
    contents,
    visible:  true
  };
}

function getRandomEntry(entries : Array<Entry>) : Entry {
  const visibleEntries = entries.filter(entry => entry.visible);

  return visibleEntries[Math.floor(Math.random() * visibleEntries.length)];
}