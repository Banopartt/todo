import { createApp } from 'vue'
import App from './App.vue'
import { routerConfing } from './router/router-confing'
import "@/styles/style.css"

createApp(App).use(routerConfing).mount('#app')
