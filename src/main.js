import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";

new VueElement({
    store
})

createApp(App).mount('#app')
