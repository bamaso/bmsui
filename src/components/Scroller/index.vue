<template>
  <div class="bms-scroller" :style="{height: height + 'px', 'line-height': height + 'px'}">
    <transition 
      name="custom-classes-transition"
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutUp">
    <div class="vertical-line" v-if="show">
      <router-link v-if="isRouter" :to="url" :tag="tag" >{{title}}</router-link>
      <a v-if="!isRouter" :href="url">{{title}}</a>
    </div>
    </transition>
    <transition 
      name="custom-classes-transition"
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutUp">
    <div class="vertical-line" v-if="showNext">
      <router-link v-if="isRouterNext" :to="urlNext" :tag="tagNext" >{{titleNext}}</router-link>
      <a v-if="!isRouterNext" :href="urlNext">{{titleNext}}</a>
    </div>
    </transition>
  </div>
</template>

<script>
module.exports = {
  name: 'BmsScroller',
  data () {
    return {
      title: '',
      titleNext: '',
      url: '',
      urlNext: '',
      isRouter: true,
      isRouterNext: true,
      show: true,
      showNext: false,
      tag: 'a',
      tagNext: 'a',
      length: 0,
      index: 0,
      runtime: 0,
      timer: function () {}
    }
  },
  props: {
    lists: {
      type: Array,
      default: [{
        title: '',
        link: {
          type: 'vue-router',
          props: {
            path: '', // 非vue-router模式无须定义下方变量
            name: '',
            params: {},
            query: {},
            tag: 'a'
          }
        }
      }]
    },
    height: {
      type: Number
    },
    timeout: {
      type: Number
    }
  },
  created () {
    this.length = this.lists.length
    this.play()
  },
  watch: {
    showNext (val, old) {
      if (this.length <= this.index) {
        if (this.length % 2 === 0) {
          if (!this.show) {
            let vm = this
            vm.show = true
            vm.play()
          }
        } else {
          if (!this.showNext) {
            let vm = this
            let downTime = this.timeout * 1000 * 2
            setTimeout(function () {
              vm.show = true
              vm.play()
            }, downTime)
          }
        }
      }
    }
  },
  methods: {
    showFrist () {
      let vm = this
      let delay = this.timeout * 1000 * 2
      let downTime = delay / 2
      setTimeout(function () {
        let link = vm.getLink(vm.lists[vm.index])
        vm.show = true
        vm.title = vm.lists[vm.index].title
        vm.isRouter = link.isRouter
        vm.url = link.url
        vm.tag = link.tag
        vm.index ++
        setTimeout(function () {
          vm.show = false
        }, downTime)
      }, delay)
    },
    showSecond () {
      let vm = this
      let delay = this.timeout * 1000 * 2
      let downTime = delay / 2
      setTimeout(function () {
        let link = vm.getLink(vm.lists[vm.index])
        vm.showNext = true
        vm.titleNext = vm.lists[vm.index].title
        vm.isRouterNext = link.isRouter
        vm.urlNext = link.url
        vm.tagNext = link.tag
        vm.index ++
        setTimeout(function () {
          vm.showNext = false
        }, downTime)
      }, delay)
    },
    getLink (props) {
      let result = {}
      // 是否使用vue-router
      if (props.link.type === 'vue-router') {
        result.isRouter = true
        // 路由转跳参数
        if (props.link.props.path) {
          result.url = { path: props.link.props.path, query: props.link.props.query, params: props.link.props.params }
        } else {
          result.url = { name: props.link.props.name, query: props.link.props.query, params: props.link.props.params }
        }
        result.tag = props.link.props.tag
      } else {
        result.isRouter = false
        result.url = props.link.props.path
        result.tag = 'a'
      }
      return result
    },
    play () {
      let vm = this
      let timeout = this.timeout * 1000 * 2
      let downTime = timeout / 2
      let firstLink = vm.getLink(vm.lists[0])
      vm.show = true
      vm.showNext = false
      vm.index = 0
      vm.runtime = 0
      // 修正延时
      vm.timer = setInterval(function () {
        // console.log(vm.runtime)
        vm.runtime++
      }, 1)
      /** Start -- 取消前置效果直接显示第一条内容 **/
      vm.title = vm.lists[0].title
      vm.isRouter = firstLink.isRouter
      vm.url = firstLink.url
      vm.tag = firstLink.tag
      vm.index ++
      setTimeout(function () {
        vm.show = false
      }, downTime)
      /** 取消前置效果直接显示第一条内容 -- End **/
      setTimeout(function () {
        let link = vm.getLink(vm.lists[vm.index])
        vm.showNext = true
        vm.titleNext = vm.lists[vm.index].title
        vm.isRouterNext = link.isRouter
        vm.urlNext = link.url
        vm.tagNext = link.tag
        vm.index ++
        setTimeout(function () {
          vm.showNext = false
        }, downTime)
      }, downTime)
      for (let i = 0; i < this.length - 2; i++) {
        if (i % 2 === 0) {
          let delay = (i / 2) * timeout
          // console.log('偶数：' + i, delay)
          setTimeout(function () {
            vm.showFrist()
          }, delay)
        } else {
          let delay = ((i - 1) / 2) * timeout + downTime
          // console.log('奇数：' + i, delay)
          setTimeout(function () {
            if (i === 1) {
              clearInterval(vm.timer)
            }
            setTimeout(function () {
              vm.showSecond()
            }, this.runtime)
          }, delay)
        }
      }
    }
  }
}
</script>
