<template>
  <v-app>
    <v-main>    
      <v-container>

        <v-row>
          <v-col cols="3">
            <EntriesPane></EntriesPane>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

// #region Imports

/* SPNNR */
import EntriesPane from './components/panes/EntriesPane.vue';

// #endregion Imports

</script>

<style scoped>

.v-application {
  background: linear-gradient(90deg, rgba(193,188,254,1) 0%, rgba(248,206,218,1) 100%);
}

</style>