import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import odysenUI from './odysenUI.js';
import './style.css';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: odysenUI
    }
});

app.mount('#app')