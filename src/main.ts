
import './style.css'
// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { setupAuthStore } from './store/authStore';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

// Initialize the auth store
setupAuthStore();

app.use(router);
app.mount('#app');

