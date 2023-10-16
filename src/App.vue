<template>
  <v-app :style="appBackgroundStyle">
    <v-main>    

      <div class="container pa-8">
        <MediaPlayerPane class="mediaplayer"></MediaPlayerPane>
        <TodoListPane class="todolist"></TodoListPane>
        <TwitchPane class="twitch"></TwitchPane>
      </div>

    </v-main>
  </v-app>
</template>

<script setup lang="ts">

// #region Imports

/* Vue */
import { computed } from 'vue';

/* Pinia */
import { storeToRefs } from 'pinia';

/* SPNNR */
import TodoListPane from './components/panes/ToDoListPane.vue';
import TwitchPane from './components/panes/TwitchPane.vue';
import MediaPlayerPane from './components/panes/MediaPlayerPane.vue';
import { useThemesStore } from './stores';

// #endregion Imports

// #region Theme

const { theme } = storeToRefs(useThemesStore());

const appBackgroundStyle = computed(() => ({
  'background': `linear-gradient(90deg, ${theme.value.appBackgroundStartColor} 0%, ${theme.value.appBackgroundEndColor} 100%)`
}));

// #endregion Theme

</script>

<style scoped lang="scss">

.container {
  display:                grid;
  grid-template-columns:  700px 300px;
  grid-template-rows:     500px 300px;

  justify-content:        center;
  gap:                    32px;

  .mediaplayer {
    grid-column:  1;
    grid-row:     1 / 3;
  }

  

}

</style>