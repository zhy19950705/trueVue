import VueRouter from 'vue-router'

import ContextMenu from './pages/ContextMenu.vue'
const routes = [
    {
        path: '/contextMenu',
        component: ContextMenu
    },
    {
        path: '/',
        redirect: '/contextMenu'
    }
]
const router = new VueRouter({
    routes
})

export default router