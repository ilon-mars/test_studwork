import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { StarshipAPI } from './service/StarshipAPI'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

window.api = new StarshipAPI();
