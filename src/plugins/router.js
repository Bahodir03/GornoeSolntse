import {createRouter, createWebHistory} from "vue-router";
import JK_Page1 from "@/pages/JK_Page1";

const routes=[
    {
        path: '',
        component: () => import("../pages/JK_Page1"),
    },
    {
        path: '/reservation',
        component: ()=> import("../pages/JK_Page2"),
    },
    {
        path: '/',
        component: JK_Page1

    }
]

export default createRouter({
    history:createWebHistory(),
    routes
})