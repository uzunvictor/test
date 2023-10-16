import './assets/scss/app.scss'
import {mask} from 'vue-the-mask/'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('mask', mask);

app.mount('#app')
