import { Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export interface YiInfiniteScrollProps {
  loading: boolean
  finished?: boolean
  offset?: number | string
  horization?: boolean
  hideLoading?: boolean
}

declare const YiInfiniteScroll: SFCWithInstall<YiInfiniteScrollProps>

export default YiInfiniteScroll
