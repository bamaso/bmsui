<template>
  <div class="bms-start">
    <div class="one-module">
      <header>安装</header>
      <p>BMSUI已经发布在npm,可直接按如下命令行进行安装</p>
      <span>npm install bmsui --save</span>
    </div>
    <div class="one-module">
      <header>使用</header>
      <p>样式引入</p>
      <span>@import '~bmsui/dist/bmsui.css'</span>
      <p>全部组件加载</p>
      <span>@import 'bmsui/dist/bmsui.js'</span>
      <p>单个组件加载</p>
      <span>import BmsAlert from 'bmsui/dist/components/alert'</span>
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
  }
}
</script>
