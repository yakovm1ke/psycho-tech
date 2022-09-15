import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home-view.vue'
import ErrorView from '@/views/error-view.vue'
import TeamView from '@/views/team-view.vue'
import TracksView from '@/views/tracks-view.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior() {
		return {top: 0}
	},
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/team',
			name: 'team',
			component: TeamView,
		},
		{
			path: '/tracks',
			name: 'tracks',
			component: TracksView,
		},
		{
			path: '/:pathMatch(.*)*',
			component: ErrorView,
		},
	],
})

export default router
