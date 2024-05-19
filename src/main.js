import './assets/base.css';
import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';


const app = createApp(App);
app.use(i18n); // i18n-ni ilovaga qo'shish
app.mount('#app');  