import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import gsap from './plugins/gsap';
import VueMq from './plugins/vuemq'
import router from './router';

Vue.config.productionTip = false

new Vue({
  vuetify,
  gsap,
  router,
  VueMq,
  render: h => h(App)
}).$mount('#app')
