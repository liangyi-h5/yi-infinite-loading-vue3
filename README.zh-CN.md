
# infinite-loading-vue3
Vue 3.0 应用程序的无限加载组件

## 安装
```
npm install yi-infinite-loading-vue3
```

<h3><a href="https://liangyi-h5.github.io/yi-infinite-loading-vue3/">demo</a>

## Usage

全局使用
```
import { createApp } from 'vue'
import App from './App.vue'
import YiInfiniteLoading from 'yi-infinite-loading-vue3'

const app = createApp(App)
// app.component("YiInfiniteLoading", YiInfiniteLoading)
// or 
app.use(YiInfiniteLoading)
app.mount('#app')

```

单独引入
```
import YiInfiniteLoading from "yi-infinite-loading-vue3"

<script>
  export default {
    components: {
      YiInfiniteLoading
    }
  }
</script>

<template>
  <div>
    <yi-infinite-loading
      :loading="isLoading"
      :finished="finished"
      :offset="100"
      @loadMore="loadMore">
    </yi-infinite-loading>
  </div>
</template>

```

## 支持 typescript 

src/components.d.ts
```
import YiInfiniteLoading from "yi-infinite-loading-vue3"

/**
 * @desc ts 声明全局注册组件
 */
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    YiInfiniteLoading: typeof YiInfiniteLoading
  }
}
```

## Props

| props             | 说明                     | 类型               | 默认值    |
| --------------- | ---------- | ---------- | ---------- |
| loadMore            | 回调函数 | function |  |
| loading | 是否加载状态 | booblean | false |
| finished | 是加载完毕 | boolean | false |
| offset | 距离底部的距离 | string ｜ number | 0 |
| hideLoading | 是否隐藏默认加载状态 | boolean | false |


## Example
Let's see the *yi-infinite-loading-vue3* package in action.

```

<template>
  <div class="infinite-scroll-box">
    <ul class="infinite-scroll-list">
      <li class="infinite-scroll-item" v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>
    <YiInfiniteLoading
      :loading="isLoading"
      :finished="finished"
      offset="100%"
      :hideLoading="true"
      @loadMore="loadMore"
    >
      <span class="tips" v-if="isLoading">loading...</span>
      <span class="tips" v-if="finished">end...</span>
    </YiInfiniteLoading>
  </div>
  <div class="clear" >
    <button @click="clear" >clear</button>
    <button v-if="!isLoading" @click="loadMore" >load more</button>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

const list = reactive<number[]>([])
const isLoading = ref(false)
const finished = ref(false)

const loadMore = () => {
  if (isLoading.value) {
    return
  }
  isLoading.value = true
  setTimeout(() => {
    const len = list.length
    for (let i = 1; i <= 10; i++) {
      list.push(len + i)
    }
    isLoading.value = false
    if (list.length > 100) {
      finished.value = true
    }
  }, 1000)
}

const clear = () => {
  list.splice(0, list.length)
  finished.value = false
}
</script>

<style scoped>
.infinite-scroll-box{
  width: 100%;
  height: 50vh;
  overflow-y: auto;
  border: 1px solid #000;
}
.infinite-scroll-list{
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.infinite-scroll-item{
  margin-bottom: 10px;
  background-color: red;
  color: #fff;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
button{
  margin-bottom: 30px;
}
.tips{
  display: block;
  text-align: center;
}
</style>

</style>


```
