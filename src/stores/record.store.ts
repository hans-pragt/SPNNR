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

    // Pick a random cover on reload:
    const coverIndex : number = Math.floor(Math.random() * 8) + 1;
    const cover : Ref<string> = ref(`/images/covers/cover_${coverIndex}.webp`);

    // #endregion Spin

    return {
      angle,
      cover,
      isSpinning
    };

  }
);