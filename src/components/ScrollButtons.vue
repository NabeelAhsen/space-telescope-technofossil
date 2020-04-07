<template>
  <v-container fluid id="scroll-buttons">
    <v-row>
      <!-- TODO: Back navigator -->
      <v-fab-transition>
        <v-btn 
          v-show="offsetLeft > 50" 
          fab 
          dark 
          v-scroll-to="{ el: previous }" 
          color="amber darken-2">
          <v-icon dark>mdi-chevron-left</v-icon>
        </v-btn>
      </v-fab-transition>
      
      <v-spacer/>

      <!-- TODO: Forward navigator -->
      <v-fab-transition>
        <v-btn 
          v-show="offsetLeft < (positions[4] + widths[4]/2) || !offsetLeft"
          fab 
          dark 
          v-scroll-to="{ el: next }" 
          color="amber darken-2">
          <v-icon dark>mdi-chevron-right</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ScrollButtons',
  props: ['offsetLeft'],
  data: function () {
    return {
      next: '#description',
      previous: '#home',
    }
  },
  watch: {
    offsetLeft: function () {
      let p = this.positions;
      let o = 10;

      if (this.offsetLeft == p[0]) {
        this.next = '#description';
        this.previous = '#home';
      } else if (this.offsetLeft == p[1]) {
        this.next = '#social-context';
        this.previous = '#home';
      } else if (this.offsetLeft > p[1]+o && this.offsetLeft < p[2]) {
        this.previous = '#description';
        this.next = '#social-context';
      } else if (this.offsetLeft == p[2]) {
        this.next = '#lifecycle';
        this.previous = '#description';
      } else if (this.offsetLeft > p[2]+o && this.offsetLeft < p[3]) {
        this.next = '#lifecycle';
        this.previous = '#social-context';
      } else if (this.offsetLeft == p[3]) {
        this.next = '#imagined-future';
        this.previous = '#social-context';
      } else if (this.offsetLeft > p[3]+o && this.offsetLeft < p[4]) {
        this.next = '#imagined-future';
        this.previous = '#lifecycle';
      } else if (this.offsetLeft == p[4]) {
        this.next = '#imagined-future';
        this.previous = '#lifecycle';
      } else if (this.offsetLeft > p[4]+o) {
        this.previous = '#imagined-future';
      }
    }
  },
  computed: {
    ...mapGetters({
      positions: 'componentPositions',
      widths: 'componentWidths',
    }),
  },
}
</script>

<style scoped>
#scroll-buttons {
}
</style>
