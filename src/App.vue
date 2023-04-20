<template>
  <v-app>
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

/* SPNNR */
import TodoListPane from './components/panes/ToDoListPane.vue';
import TwitchPane from './components/panes/TwitchPane.vue';
import MediaPlayerPane from './components/panes/MediaPlayerPane.vue';

// #endregion Imports

</script>

<style scoped lang="scss">

.v-application {
  background: linear-gradient(90deg, rgba(193,188,254,1) 0%, rgba(248,206,218,1) 100%);
}

.container {
  display:                grid;
  grid-template-columns:  700px 300px;
  grid-template-rows:     1fr 300px;

  justify-content:        center;
  gap:                    32px;

  .mediaplayer {
    grid-column:  1;
    grid-row:     1 / 3;
  }

  

}

</style>