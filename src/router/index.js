import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Polivirtual from "../views/Polivirtual.vue"

const routes = [

    {
        path: "/",
        component: Home,
        name: "Home"
    },
    {
        path: "/polivirtual",
        component: Polivirtual,
        name: "Polivirtual"
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router   
