import { createApp } from 'vue'
import App from './App.vue'

import GameMonster from './components/GameMonster.vue';
import UsersManagement from './components/UsersManagement.vue';
import TaskManagement from './components/TaskManagement.vue';

const app = createApp(App);

app.component('GameMonster', GameMonster)
app.component('UsersManagement', UsersManagement)
app.component('TaskManagement', TaskManagement)

app.mount('#app')

// createApp(App).mount('#app')