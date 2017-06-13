// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios;
/*import VueResource from 'vue-resource'
Vue.use(VueResource)*/

Vue.config.productionTip = false;

import MyPlugin from './assets/js/common.js'
Vue.use(MyPlugin)

const JQ = require('./assets/js/jquery-1.12.2.min.js');
const Url = require('./assets/js/url.js');

Vue.prototype.$Url = Url;
//页码公共组件
import pagination from './components/common/pagination/index.js';
Vue.use(pagination)

//日期公共组件
import calendar from './components/common/calendar/index.js';
Vue.use(calendar)

/*引入全局样式
import '@/assets/css/base.scss';
import '@/assets/css/font2/font.css';*/


router.beforeEach((to, from, next) => {
	if(to.name == "Application" || to.name == "userManagement"){
		store.dispatch('changeState',1); 
	}
	if(to.name == "Log"){
		store.dispatch('changeState',2); 
	}
	if(to.name == "CaOrganization" || to.name == "PasswordSeeting"){
		store.dispatch('changeState',3); 
	}
	next();
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
