import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia()

app.use(createPinia())
app.use(router)

app.use(pinia);

app.use(ElementPlus)


app.mount('#app')
