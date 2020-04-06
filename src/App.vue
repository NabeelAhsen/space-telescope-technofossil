<template>
  <v-app id="app">

    <!-- Permanent navigation drawer minified --> 
    <v-navigation-drawer
      mini-variant 
      dark
      permanent
      app
      >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          >
          <v-list-item-icon v-scroll-to="'#home'">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            {{ item.text }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Content -->
    <v-content v-scroll:#scroll-wrapper="onScroll">
      <!-- Progress bar  -->
      <v-progress-linear
        fixed
        bottom
        color="amber"
        :value="progress"
        >
      </v-progress-linear> 

     <!-- Permanent scroll keys -->
      <ScrollButtons v-bind:offset-left='offsetLeft' class="scroll-keys"/>

      <!-- Main slides -->
      <div id="scroll-wrapper" class="deck">
        <Home/>
        <Description/>
        <SocialContext/>
        <Lifecycle/>
        <ImaginedFuture/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
 import Description from './components/Description';
 import Home from './components/Home';
 import Lifecycle from './components/Lifecycle';
 import ScrollButtons from './components/ScrollButtons';
 import SocialContext from './components/SocialContext';
 import ImaginedFuture from './components/ImaginedFuture';

import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
     Description,
     Home,
     ImaginedFuture,
     Lifecycle,
     ScrollButtons,
     SocialContext,
  },
  data: () => ({
   items: [
     { title: 'Top', icon: 'mdi-arrow-left-drop-circle-outline' },
     ],
    offsetLeft: 0,
    active: 'none',
    totalWidth: 100,
  }),
  methods: {
    onScroll (e) {
      this.offsetLeft = e.target.scrollLeft;
    },
  },
  computed: {
    ...mapGetters({
      widths: 'componentWidths',  
    }),
    progress () {
      return this.offsetLeft/this.totalWidth * 100;
    },
  },
  mounted: function () {
    this.unsubscribe = this.$store.subscribe((mutation) => {
      if (mutation.type === 'SET_COMPONENT_INFORMATION') {
        this.totalWidth = this.widths.reduce((a,b) => a + b, 0);
      }
    })
  },
};
</script>

<style>
body {
  height: 100vh;
  width: 100%;
}

#app {
  font-family: 'Open Sans', sans-serif;
}

.deck {
  min-height: 100%;
  min-width: 100%;
  display: flex;
  overflow-x: auto;
}
.slide {
  border: 5px solid red;
  min-width: 50vw;
}

.deck::-webkit-scrollbar {
  display: none;
}

.scroll-keys {
  position: fixed;
  z-index: 99999;
  bottom: 15vh;
  width: 93vw;
  margin-left: 5px;
}
</style>
