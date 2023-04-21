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

    const entries : Ref<Array<Entry>> = ref([
      // TODO Inserting dev values.
      generateEntry('House'),
      generateEntry('Riddim'),
      generateEntry('Classical'),
      generateEntry('Disco'),
      generateEntry('Funk')
    ]);

    function insertNewEntry() {
      if (!newEntry.value) {
        return;
      }

      entries.value = [
        ...entries.value,
        {
        id:       v4(),
        contents: newEntry.value
        }
      ];

      // Reset for next entry:
      newEntry.value = '';
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
      winner.value = getRandomEntry(entries.value);
    }

    // #endregion Picking

    return {

      newEntry,
      insertNewEntry,
      removeEntry,
      removeAllEntries,

      winner,
      pickWinner,

      entries,

    }

  }
);

function generateEntry(contents : string) : Entry {
  return {
    id:       v4(),
    contents
  };
}

function getRandomEntry(entries : Array<Entry>) : Entry {
  return entries[Math.floor(Math.random() * entries.length)];
}