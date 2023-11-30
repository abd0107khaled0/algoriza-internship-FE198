import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './assets/settings/styleScss.scss'
import App from './App.vue'
import router from './router'
import api from "./service/api";
import Covid from "./components/Covid.vue"
// import VueGoogleMaps from '@fawmi/vue-google-maps'
// import HttpPlugin from './service/http-plugin.js'
// import { registerPlugins } from "./plugins";

const pinia = createPinia()

const app = createApp(App);
app.config.globalProperties.api = api // Allow axios in all componenets this.$http

// map lng lat
// app.use(VueGoogleMaps, {
//     load: {
//         key: 'AIzaSyCc9LrGfiq0QsEuNmPCr-eIUyjXnom-cG0',
//     },
// })

// registerPlugins(app);
app.component('Covid', Covid)

app.use(router).use(pinia).mount('#app')
