<template>
  <div class="bms-home">
    <img class="logo" src="~docs_assets/img/logo.png" alt="">
    <header class="title">BMS-UI</header>
    <p>基于VUE2.0的UI组件库</p>
    <bms-button type="danger_block" title="点此进入哦~" @click="start"></bms-button>
    <div class="dashang">
      <span>一分钱也是爱啊！！！</span>
      <img src="~docs_assets/img/alipay.png" alt="">
      <img src="~docs_assets/img/wechat.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    start () {
      this.$router.push({
        name: 'start'
      })
    }
  }
}
</script>
