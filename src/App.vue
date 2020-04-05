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
          <v-list-item-icon>
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
      <div class="temp">
        {{ offsetLeft }}
      </div>
      <!-- Permanent scroll keys -->
      <ScrollButtons class="scroll-keys"/>

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
  }),
  methods: {
    onScroll (e) {
      this.offsetLeft = e.target.scrollLeft;
    },
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

.scroll-keys {
  border-style: dotted;
  color: red;
  position: fixed;
  bottom: 15vh;
  width: 94vw;
}

.temp {
  position: fixed;
  padding-left: 25px;
  bottom: 0;
}
</style>
