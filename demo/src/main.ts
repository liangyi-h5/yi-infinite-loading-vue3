import { createApp } from 'vue'
import App from './App.vue'
import YiInfiniteLoading from '../../'

const app = createApp(App)

app.component("YiInfiniteLoading", YiInfiniteLoading)
app.mount('#app')
