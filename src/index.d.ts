import { DefineComponent, App } from 'vue'

export declare const YiInfiniteScroll: DefineComponent<{
  loading: boolean,
  finished?: boolean,
  offset?: number | string,
  horization?: boolean,
  hideLoading?: boolean,
}, {
  loadMore: () => void
}> & {
  install(app: App): any
}

export default YiInfiniteScroll
