// #region Imports

/* Pinia */
import { defineStore } from 'pinia';

/* Vue */
import type { Ref } from 'vue';
import { ref } from 'vue';

// #endregion Imports

export const useEntriesStore = defineStore(
  'entries',
  () => {

    // #region Current Entry

    const newEntry : Ref<string> = ref('123');
    function insertNewEntry() {
      newEntry.value = '';
    }

    // #endregion Current Entry

    return {

      newEntry,
      insertNewEntry

    }

  }
);