import { createApp } from 'vue';
import { createRouter, craeteWebHistory } from 'vue-router'

import App from './App.vue';

const router = createRouter({
    history: craeteWebHistory(),
    routes: []
});

const app = createApp(App)

app.mount('#app');
