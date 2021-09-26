import Main from '@/pages/Main';
import About from '@/pages/About';
import Todo from '@/pages/Todo';
import {createRouter, createWebHistory} from "vue-router";

const routes  = [
  { path: '/', component: Main },
  { path: '/about', component: About },
  { path: '/todo', component: Todo },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;