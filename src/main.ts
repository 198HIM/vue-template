import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './router'
import "./assets/style/tailwindcss.css"



App.mount("#app");
App.use(router)
