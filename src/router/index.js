import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login
	},
	{
		path: '/detail',
		name: 'Detail',
		component: () => import(/* webpackChunkName: "about" */ '@/views/Detail.vue'),
		beforeEnter: (to, from, next) => {
			const isAuthenticated = !!localStorage.getItem('user');
			isAuthenticated ? next() : next({ name: 'Login' })
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
