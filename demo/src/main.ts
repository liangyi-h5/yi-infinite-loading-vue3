import { createApp } from 'vue'
import App from './App.vue'
import YiInfiniteScroll from '../../src/index'

const app = createApp(App)

app.component("YiInfiniteScroll", YiInfiniteScroll)
app.mount('#app')
