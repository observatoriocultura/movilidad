import { createApp } from 'vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
import App from './App.vue'
import faviconUrl from './assets/images/app/favicon.ico'
import router from './router'

document.querySelector('#app-favicon')?.setAttribute('href', faviconUrl)

createApp(App).use(router).mount('#app')
