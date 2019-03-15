import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import App from './App.vue'
import { router } from './router';

Vue.use(Vant);
Vue.use(Vuex);
Vue.use(VueResource);
Vue.config.productionTip = false;


let store = new Vuex.Store({
  state: {
    message: ''
  },
  mutations: {
    updateMessage(state, payload) {
      state.message = payload
    }
  },
  actions: {
    refreshMessage(context) {
      return new Promise((resolve) => {
        this.$http.get('https://www.baidu.com/').then((response) => {
          context.commit('updateMessage', response.data.message);
          resolve();
        });
      });
    }
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
