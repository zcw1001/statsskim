import { createRouter, createWebHistory } from 'vue-router'
import NZPopulation from '@/pages/NewZealand/Population.vue'
import NZEducation from '@/pages/NewZealand/Education.vue'
import NZIncome from '@/pages/NewZealand/Income.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        redirect: {
            name: 'nz-population'
        }
    },
    {
        name: 'nz',
        path: '/nz',
        redirect: {
            name: 'nz-population'
        }
    },
    {
        name: 'nz-population',
        path: '/nz/population',
        component: NZPopulation,
        meta: {
            title: 'StatsSkim'
        }
    },
    {
        name: 'nz-education',
        path: '/nz/education',
        component: NZEducation,
        meta: {
            title: 'StatsSkim'
        }
    },
    {
        name: 'nz-income',
        path: '/nz/income',
        component: NZIncome,
        meta: {
            title: 'StatsSkim'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior () {
        return {
            top: 0
        }
    }
})

router.afterEach(to => {
    document.title = to.meta.title
})

export default router