import { DefineComponent } from 'vue'

declare const YiInfiniteScroll: DefineComponent<{
  loading: boolean,
  finished?: boolean,
  offset?: number | string,
  horization?: boolean,
  hideLoading?: boolean,
}, {
  loadMore: () => void
}>

export default YiInfiniteScroll
