import { createRouter, createWebHashHistory } from "vue-router";

import HomeApp from './components/HomeApp.vue'
import Register from './components/register/Register.vue'

const router = createRouter({

    history : createWebHashHistory(),
    routes : [
        {
            path : '/',
            redirect : '/register'
        },
        {
            path : '/home',
            component : HomeApp
        },
        {
            path : '/register',
            component : Register
        },
    ]
})

export default router