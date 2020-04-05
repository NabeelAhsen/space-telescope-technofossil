<template>
  <v-app id="app">

    <!-- Permanent navigation drawer minified -->
    <v-navigation-drawer
      app
      mini-variant 
      permanent
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
    <v-content v-scroll:#scrolling-wrapper-flexbox="onScroll">
      <!-- Permanent scroll keys -->
      <ScrollButtons v-bind:offset-left='offsetLeft' class="scroll-keys"/>

      <!-- Progress bar -->
      <v-progress-linear
        absolute
        bottom
        :value="progress"
        >
      </v-progress-linear>

      <!-- Main slides -->
      <div 
        id="scrolling-wrapper-flexbox">
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
#app {
  height: 100vh;
}

#scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  border-style: dotted;
  height: 100%;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.scroll-keys {
  border-style: dotted;
  color: red;
  position: fixed;
  bottom: 15vh;
  width: 94vw;
}
</style>
