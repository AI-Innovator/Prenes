import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/index.vue'
import Dashboard from '../pages/home.vue'
import FaceRecognition from '../pages/fr.vue'
import SignIn from '../pages/auth/login.vue'
import SignUp from '../pages/auth/register.vue'
import BackgroundCheck from '../pages/BackgroundCheck.vue'
import CarbonManagement from '../pages/cms.vue'

const routes = [
    {
        path: '/auth/signin',
        name: 'Sign in',
        component: SignIn
    },
    {
        path: '/auth/signup',
        name: 'Sign up',
        component: SignUp
    },
    {
        path: '/',
        name: 'Landing page',
        component: LandingPage
    },
    {
        path: '/dashboard',
        name: 'Dashboard page',
        component: Dashboard
    },
    {
        path: '/fr',
        name: 'Face Recognition',
        component: FaceRecognition
    },
    {
        path: '/backgroundcheck',
        name: 'Background Check',
        component: BackgroundCheck
    },
    {
        path: '/cms',
        name: 'Carbon Management System',
        component: CarbonManagement
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router