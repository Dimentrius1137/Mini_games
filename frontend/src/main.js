import './styles.scss'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
const app = createApp(App)
import "bootstrap/dist/js/bootstrap.js"

app.use(router)
app.mount('#app')
