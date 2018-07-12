// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import animate from 'animate.css'

Vue.config.productionTip = false;
// axios.defaults.baseURL = process.env.BASE_URL;
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

window.addEventListener("popstate", function(e){
  // alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能
  console.log('我监听到了浏览器的返回按钮事件啦');
  // e.preventDefault();


  window.opener=null;
  window.open('','_self');
  window.close();

}, false);
