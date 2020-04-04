<template>
  <v-container fluid id="scroll-buttons">
    <v-row>
      <!-- TODO: Back navigator -->
      <v-btn class="mx-2" fab dark large color="cyan">
        <v-icon dark>mdi-chevron-left</v-icon>
      </v-btn>
      
      <v-spacer/>

      <!-- TODO: Forward navigator -->
      <v-btn class="mx-2" fab dark large color="cyan">
        <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ScrollButtons',
  data: () => ({}),
}
</script>

<style scoped>
#scroll-buttons {
}
</style>
