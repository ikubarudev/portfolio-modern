import { createRouter, createWebHistory } from 'vue-router'
import ContactsPage from "../views/Contacts.vue"
import TechStacksPage from "../views/TechStacks.vue"
import ProjectsPage from "../views/Projects.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsPage
    },
    {
      path: '/techstacks',
      name: 'techstacks',
      component: TechStacksPage
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsPage,
    }
  ]
})

export default router
