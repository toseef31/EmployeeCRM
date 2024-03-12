import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import BaseCard from './components/UI/BaseCard.vue';
import BaseButtons from './components/UI/BaseButtons.vue';
import UsersManagement from './components/UsersManagement.vue';
import TaskManagement from './components/TaskManagement.vue';
import CompanyCourses from './components/CompanyCourses.vue';
import CompanyProfile from './components/CompanyProfile.vue';
import HomePage from './components/HomePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: HomePage,
        },
        {
            path: '', component: HomePage,
        },
        {
            path: '/users', component: UsersManagement,
        },
        {
            path: '/tasks', component: TaskManagement,
        },
        {
            path: '/courses', component: CompanyCourses,
        },
        {
            path: '/companies', component: CompanyProfile,
        }
    ],
    linkActiveClass: 'active'
})

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.component('BaseButtons', BaseButtons);

app.use(router);

app.mount('#app');

// createApp(App).mount('#app')