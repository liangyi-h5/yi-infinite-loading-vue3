<template>
  <div
    class="yi-infinite-loading"
    :class="{
      horization: horization
    }"
  >
    <span
      ref="observerRef"
      class="yi-infinite-loading-observer"
      :style="observerStyle"
    ></span>
    <div
      v-if="loading && !hideLoading"
      class="yi-loading"
    >
      <span/>
      <span/>
      <span/>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, defineOptions } from 'vue'
defineOptions({
  name: 'yi-infinite-loading'
})
const props = defineProps({
  loading: false, // Is loading ...
  finished: true, // Is loading completed
  offset: 0, // Positioning offset
  horization: false, // Load horizontally
  hideLoading: false // Hide the default loading effect
})
const emits = defineEmits(['loadMore'])

const observerRef = ref(null)
const viewport = ref(0)

const observerStyle = computed(() => {
  if (typeof props.offset === 'number' || /^\d+$/.test(props.offset)) {
    return {
      transform: props.horization ? `translateX(-${props.offset}px)` : `translateY(-${props.offset}px)`
    }
  } else if (typeof props.offset === 'string' && /%$/.test(props.offset)) {
    const percent = parseFloat(props.offset.replace(/%/g, '')) / 100
    return {
      transform: props.horization ? `translateX(-${percent * viewport.value}px)` : `translateY(-${percent * viewport.value}px)`
    }
  } else {
    return {
      transform: props.horization ? `translateX(-${props.offset})` : `translateY(-${props.offset})`
    }
  }
})
let observer

const loadMore = () => {
  if (props.loading || props.finished) return
  emits('loadMore')
}

onMounted(() => {
  if (observerRef.value) {
    const el = observerRef.value
    const screenView = window.visualViewport || window.screen
    viewport.value = props.horization ? screenView.width : screenView.height
    observer = new IntersectionObserver(entries => {
      if (entries[0] && entries[0].isIntersecting) {
        loadMore()
      }
    }, { threshold: [1.0] })
    observer.observe(el)
  }
})
onUnmounted(() => {
  observer && observer.disconnect()
})
</script>

<style>
.yi-infinite-loading{
  min-height: 1px;
  position: relative;
  padding: 8px;
}
.horization {
  min-width: 1px;
}
.yi-infinite-loading-observer{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  background: green;
  height: 1px;
  width: 1px;
  transform: translateY(-100px);
  pointer-events:none;
}
.yi-loading{
  line-height: 0px;
}
.yi-loading span {
  display: inline-block;
  animation: yi-an 1.2s infinite;
  -webkit-animation: yi-an 1.2s infinite;
  width: 3px;
  height: 3px;
  background: #444;
  border-radius: 50%;
  margin: 2px;
}
.yi-loading span:nth-child(1) {
  animation-delay: 0s;
  -webkit-animation-delay: 0s;
}
.yi-loading span:nth-child(2) {
  animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
}
.yi-loading span:nth-child(3) {
  animation-delay: 0.8s;
  -webkit-animation-delay: 0.8s;
}
@keyframes yi-an
{
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(-6px);
  }
  40% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
