import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from './router'; // Wichtig: Router importieren

const app = createApp(App);

app.use(router); // Router verwenden

app.mount('#app'); // App mounten


