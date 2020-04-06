import Vue from 'vue'
import App from './App.vue'
import VueKinesis from 'vue-kinesis';
var VueScrollTo = require('vue-scrollto');

// Install a scroller
Vue.use(VueScrollTo, {
  container: "#scroll-wrapper",
  duration: 1000,
  easing: "ease-out",
  x: true,
  y: false,
});
Vue.use(VueKinesis);

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
