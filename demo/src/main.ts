import { createApp } from 'vue'
import App from './App.vue'
import InfiniteScroll from '../../src/index'

const app = createApp(App)

app.component("InfiniteScroll", InfiniteScroll)
app.mount('#app')
