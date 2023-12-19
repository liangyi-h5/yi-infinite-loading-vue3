import YiInfiniteLoading from 'yi-infinite-loading-vue3'

/**
 * @desc ts Declare global registration components
 */
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    YiInfiniteLoading: typeof YiInfiniteLoading
  }
}
