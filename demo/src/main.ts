import { createApp } from 'vue'
import App from './App.vue'
import { YiInfiniteScroll } from 'yi-infinite-loading-vue3'

const app = createApp(App)

// app.component("YiInfiniteScroll", YiInfiniteScroll)
app.use(YiInfiniteScroll)
app.mount('#app')
