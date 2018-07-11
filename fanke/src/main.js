// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import animate from 'animate.css'

Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.BASE_URL;
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,

  methods: {
    postData(url, data) {
      this.$http({
        method: 'post',
        url: url,
        data: {
          data
        }
      })
    }
  },
});
