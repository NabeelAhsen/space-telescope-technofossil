import Vue from 'vue';
import Vuex from 'vuex';

// import the necessary modules
import appState from './global';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appState,
  },
});

