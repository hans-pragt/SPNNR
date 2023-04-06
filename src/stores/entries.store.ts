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
      entries.value.push({
        id:       v4(),
        contents: newEntry.value
      });

      // Reset for next entry:
      newEntry.value = '';
    }

    function removeEntry(id : string) {
      entries.value = entries.value.filter(e => e.id !== id);
    }

    // #endregion Entries

    return {

      newEntry,
      insertNewEntry,
      removeEntry,

      entries

    }

  }
);