import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './assets/settings/styleScss.scss'
import App from './App.vue'
import router from './router'
import api from "./service/api";
import Covid from "./components/Covid.vue"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import VueGoogleMaps from '@fawmi/vue-google-maps'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);
app.config.globalProperties.api = api // Allow axios in all componenets this.$http

// map lng lat
// app.use(VueGoogleMaps, {
//     load: {
//         key: 'AIzaSyCc9LrGfiq0QsEuNmPCr-eIUyjXnom-cG0',
//     },
// })

app.component('Covid', Covid)
app.use(router).use(pinia).mount('#app')
