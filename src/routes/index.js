import { createRouter, createWebHistory } from 'vue-router';
import FormApp from '../components/FormApp'
import FormSubmit from '../components/FormSubmit'

const router = createRouter ({
   history: createWebHistory (
       '/',
   ),
    routes: [
        { path: '/', component: FormApp },
        { path: '/success', component: FormSubmit },
        { path: '/catchAll(.*)', redirect: '/' },
    ]
})

export default router;
