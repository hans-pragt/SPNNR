<template>
  <v-dialog
    v-model   = "showDialog"
    width     = "30vw"
  >

    <!-- 
      
      Pane has to be wrapped in a div, or the v-dialog styles will override the
      styles of the panel.

    -->
    <div>

      <Pane
        title   = "Alert"
        :color  = "ALERT_PANE_COLOR"
      >

        <div class="message pa-8">
          <v-icon
            class   = "icon mr-6"
            icon    = "mdi-alert-circle"
            size    = "x-large"
            :color  = "ALERT_PANE_COLOR"
          >
          </v-icon>
          <span class="text-h2">{{ properties.winner?.contents }}</span>
        </div>

        <div class="pa-4 d-flex justify-end">
          <v-btn 
            variant = "outlined"  
            width   = "140px"
            @click  = "showDialog = false;"
          >
            OK
          </v-btn>
        </div>

      </Pane>

    </div>
  </v-dialog>
</template>

<script setup lang="ts">

// #region Imports

/* Vue */
import type { Ref } from 'vue';
import { ref, watch } from 'vue';

/* SPNNR */
import Pane from '@/components/common/Pane.vue';

import type { Entry } from '@/models';
import { ALERT_PANE_COLOR } from '@/constants';

// #endregion Imports

// #region Properties

interface NotificationDialogProperties {
  winner? : Entry;
}

const properties = defineProps<NotificationDialogProperties>();

// #endregion Properties

// #region Dialog

const showDialog : Ref<boolean> = ref(false);

watch(
  () => properties.winner,
  () => {
    showDialog.value = true;
  }
);

// #endregion Dialog

</script>

<style scoped lang="scss">

.message {
  display:        flex;
  flex-direction: row;
  align-items:    center;

  .icon {
    font-size:    4em;
  }
}

</style>