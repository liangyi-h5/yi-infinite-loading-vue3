import YiInfiniteScroll from "../../types/index.d.ts"

/**
 * @desc ts Declare global registration components
 */
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    YiInfiniteScroll: typeof YiInfiniteScroll
  }
}
