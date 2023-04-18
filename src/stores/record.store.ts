// #region Imports

/* Pinia */
import { defineStore } from 'pinia';

/* Vue */
import type { Ref } from 'vue';
import { ref } from 'vue';

// #endregion Imports

export const useRecordStore = defineStore(
  'record',
  () => {
    
    // #region Spin

    const angle : Ref<number> = ref(0);     // The angle of the record, in degrees.
    const isSpinning : Ref<boolean> = ref(false);

    // #endregion Spin

    return {
      angle,
      isSpinning
    };

  }
);