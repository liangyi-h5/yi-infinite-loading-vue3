import { DefineComponent, EmitsOptions } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export interface YiInfiniteScrollProps {
  loading: boolean
  finished?: boolean
  offset?: number | string
  horization?: boolean
  hideLoading?: boolean
}

// declare const YiInfiniteScroll: SFCWithInstall<{
//   loading: boolean
//   finished?: boolean
//   offset?: number | string
//   horization?: boolean
//   hideLoading?: boolean
// }>
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
