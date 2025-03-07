import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/home-page.vue";
import TodoPage from "@/pages/todo-page.vue";
import AboutPage from "@/pages/about-page.vue";
export const routerConfing = createRouter({
    history: createWebHistory(),
    routes:[
        {
            name:"Home",
            path:"/",
            component: HomePage

        },
        {
            name:"Todo",
            path:"/todo",
            component: ()=> import("@/pages/todo-page.vue")
        },
        {
            name: "About",
            path:"/about",
            component: ()=> import("@/pages/about-page.vue")
        }
    ]
})