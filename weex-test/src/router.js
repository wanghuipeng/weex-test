/* global Vue */
import Router from 'vue-router'
import home from '@/components/home'
import book from '@/components/book'

Vue.use(Router)

module.exports = new Router({
    routes: [{
            path: '/',
            name: 'book',
            component: book
        },
        {
            path: '/home',
            name: 'home',
            component: home
        }
    ]
})