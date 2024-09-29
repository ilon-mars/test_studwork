import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import '@/assets/styles/modern-normalize.min.css';
import '@/assets/styles/vars.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
