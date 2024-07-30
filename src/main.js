import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from `@primevue/themes/aura`
import './style.css'
import App from './App.vue'



const App = createApp(App);
App.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});