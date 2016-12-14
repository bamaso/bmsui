<template>
  <div id="app">
    <div class="model" v-if="open" @click="open=false"></div>
    <div class="bmsui-appbar" :class="{'nav-show': desktop}">
      <i class="iconfont" v-if="!desktop" @click="open=true">&#xe664;</i>
      {{title}}
      <img class="logo" src="~docs_assets/img/logo.png" alt="" @click="go('Home')">
    </div>
    <div class="bmsui-aside" v-if="desktop || open">
      <header>BMS-UI</header>
      <ul>
        <li @click="go('Home')">Home-首页</li>
        <li @click="go('start')">start-安装与使用</li>
        <li @click="go('address')">Address-组件</li>
        <li @click="go('alert')">Alert-组件</li>
        <li @click="go('button')">Button-组件</li>
        <li @click="go('confirm')">Confirm-组件</li>
        <li @click="go('emoji')">Emoji-组件</li>
        <li @click="go('input')">Input-组件</li>
        <li @click="go('loading')">Loading-组件</li>
        <li @click="go('message')">Message-组件</li>
        <li @click="go('number')">Number-组件</li>
        <li @click="go('popup')">Popup-组件</li>
        <li @click="go('radio')">Radio-组件</li>
        <li @click="go('rater')">Rater-组件</li>
        <li @click="go('scroller')">Scroller-组件</li>
        <li @click="go('selector')">Selector-组件</li>
        <li @click="go('spinner')">Spinner-组件</li>
        <li @click="go('switch')">Switch-组件</li>
        <li @click="go('tab')">Tab-组件</li>
        <li @click="go('textarea')">Textarea-组件</li>
        <li @click="go('toast')">Toast-组件</li>
      </ul>
    </div>
    <div class="bmsui-content" :class="{'nav-show': desktop}">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    const desktop = isDesktop()
    return {
      desktop: desktop,
      title: '',
      open: false
    }
  },
  mounted () {
    this.title = this.$route.name
    window.addEventListener('resize', () => {
      this.get_status()
    })
  },
  methods: {
    get_status () {
      const desktop = isDesktop()
      if (desktop === this.desktop) return
      this.desktop = desktop
    },
    go (route) {
      this.$router.push({
        name: route
      })
      this.open = false
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.get_status)
  },
  watch: {
    $route (to, from, next) {
      this.title = to.name
      window.scroll(0, 0)
    }
  }
}
function isDesktop () {
  return window.innerWidth > 700
}
</script>
<style lang="scss">
@import '../src/assets/sass/Style';
@import '~docs_assets/sass/Style';
  #app{
  	height:100%;
    padding-top:50px;
  }
</style>