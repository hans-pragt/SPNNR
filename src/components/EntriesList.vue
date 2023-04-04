<template>
  <div>

    <!-- Input Field -->
    <v-text-field
      label     = "entry"
      variant   = "outlined"
      @keydown.enter = "onAddEntry();"
    >
    </v-text-field>

  </div>
</template>

<script setup lang="ts">

// #region New Entry

function onAddEntry() {
  console.log('test');
}

// #endregion New Entry

</script>