import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Deathstar from './views/Deathstar.vue';
import Error from './views/Error.vue';


Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/deathstar',
            name: 'deathstar',
            component: Deathstar
        },
        {
            path: '/error',
            name: 'error',
            component: Error
        }
    ]
})