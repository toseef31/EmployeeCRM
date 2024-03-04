import { createApp } from 'vue'
import App from './App.vue'

import BaseCard from './components/UI/BaseCard.vue';
import BaseButtons from './components/UI/BaseButtons.vue';

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.component('BaseButtons', BaseButtons);

app.mount('#app');

// createApp(App).mount('#app')