import VueRouter from 'vue-router'

import ContextMenu from './pages/ContextMenu'
const AudioPlay = () => import('./pages/AudioPlay.vue')

const routes = [
    {
        path: '/contextMenu',
        component: ContextMenu
    },
    {
        path: '/audio',
        component: AudioPlay
    },
    {
        path: '/',
        redirect: '/contextMenu'
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router