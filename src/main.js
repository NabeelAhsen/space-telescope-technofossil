import Vue from 'vue'
import App from './App.vue'
var VueScrollTo = require('vue-scrollto');

// Install a scroller
Vue.use(VueScrollTo, {
  container: "#scrolling-wrapper-flexbox",
  duration: 2500,
  easing: "ease-in-out",
  offset: 0,
  x: true,
  y: false,
  force: true,
});

// State management
import store from './store';

// The material design language
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
