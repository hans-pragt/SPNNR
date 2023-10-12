// #region Imports

/* Pinia */
import { defineStore } from 'pinia';

/* Vue */
import type { Ref } from 'vue';
import { ref } from 'vue';

/* SPNNR */
import type { Theme } from '@/models';

// #endregion Imports

export const useThemesStore = defineStore(
  'themes',
  () => {

    // #region Current Theme

    const theme : Ref<Theme> = ref(getSelectedTheme());

    // #endregion Current Theme

    return {
      theme
    };

  }
);

import { DefaultTheme } from '@/themes/default.theme';
import { HalloweenTheme } from '@/themes/halloween.theme';

function getSelectedTheme() : Theme {
  //return DefaultTheme;
  return HalloweenTheme;
}