import YiInfiniteScroll from './InfiniteScroll.vue'

YiInfiniteScroll.install = (app) => {
  app.component(YiInfiniteScroll.name, YiInfiniteScroll)
}
export const InfiniteScroll = YiInfiniteScroll

export default InfiniteScroll
