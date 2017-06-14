import Vue from 'vue'
import Router from 'vue-router'
/*import Hello from '@/components/Hello'
import Login from '@/components/login'*/
Vue.use(Router)


const Login = resolve => require(['@/components/Login'], resolve);
const Application = resolve => require(['@/components/application'], resolve);
const userManagement = resolve => require(['@/components/user_management'], resolve);
const Log = resolve => require(['@/components/log'], resolve);
const CaOrganization = resolve => require(['@/components/ca_organization'], resolve);
const PasswordSeeting = resolve => require(['@/components/password_setting'], resolve);

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
	{
		path: '/application',
		name: 'Application',
		component: Application
	},
	{
		path: '/user_management',
		name: 'userManagement',
		component: userManagement
	},
	{
		path: '/log',
		name: 'Log',
		component: Log
	},
	{
		path: '/ca_organization',
		name: 'CaOrganization',
		component: CaOrganization
	},
	{
		path: '/password_setting',
		name: 'PasswordSeeting',
		component: PasswordSeeting
	},
	{
		path:"*",
		redirect:"/login"
	}
  ]
})
