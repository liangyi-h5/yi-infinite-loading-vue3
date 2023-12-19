import { DefineComponent, App } from 'vue'

export declare const YiInfiniteLoading: DefineComponent<{
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

export default YiInfiniteLoading
