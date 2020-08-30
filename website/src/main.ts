import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import './plugins/avue'
import './plugins/v-chart'
import axios from 'axios'

Vue.config.productionTip = false

const http = axios
axios.defaults.baseURL = process.env.VUE_APP_API_URL || '/'
// http request 拦截器
axios.interceptors.request.use(
  config => {
    var token = sessionStorage.getItem('token');
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = 'Bearer ' + sessionStorage.token
    }
    return config;
  },
  err => {
    return Promise.reject(err);
});
Vue.prototype.$http = http
Vue.prototype.$httpajax = http


router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
     next();
  } else {// 每次页面跳转执行，token或openId錯誤，均提示跳转到首页
     let token = sessionStorage.getItem('token');
     if (token === null || token === '' || token === undefined) {
        setTimeout(function () {
           next('/login');
        },1000)
     }else{
        next();
     }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
