import { createApp } from 'vue'
import './index.css'
import router from './router'
import App from './App.vue'
import * as echarts from 'echarts';

const app = createApp(App)
app.use(router)
app.mount('#app')
app.provide('echarts', echarts)