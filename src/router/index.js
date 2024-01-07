import Sendpage from "@/sendpage.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import Chose from "@/chose.vue";
import Nofound from "@/nofound.vue";
import Res from "@/res.vue";

const routes = [
    {
        path: "/",
        redirect: "/chose",
    },
    {
        path: "/chose",
        name: "Chose",
        component: Chose,
    },
    {
        path: "/send",
        name: "Send",
        component: Sendpage,
    },
    {
        path: "/res/:status",
        name: "Res",
        component: Res,
    },
    {
        name: "/noFound",
        path: "/:pathMatch(.*)",
        component: Nofound,
    }
]

const router = new createRouter({
    history: createWebHashHistory(),
    routes
})

export default router