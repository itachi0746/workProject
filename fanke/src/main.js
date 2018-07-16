// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import VueLazyload from 'vue-lazyload'
import animate from 'animate.css'

const err = require('./assets/error.png');
const ld = require('./assets/loading2.gif');

// 添加VueLazyload 选项
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: err,
  loading: ld,
  attempt: 1
});

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
  console.log('我监听到了浏览器的返回按钮事件啦');
  // e.preventDefault();


  let userAgent = navigator.userAgent;
  if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") !=-1) {
    // window.location.href="about:blank";
    console.log(111)
    // window.opener=null;window.open('about:blank','_self','').close();
    WeixinJSBridge.call('closeWindow');  // 微信浏览器关闭当前页面
  }else if(userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1){
    window.opener=null;window.open('about:blank','_self','').close();
    console.log(222)
  }else {
    window.opener = null;
    window.open("about:blank", "_self");
    window.close();
    console.log(333)
  }

}, false);
