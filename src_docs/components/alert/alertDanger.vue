<template>
  <div>
    <bms-button @click.native="on" title="click to show" type="warning_block"></bms-button>
    <bms-alert :show="show" title="这是标题" buttonText="按钮文字" type="danger" @on-hide="onHide"></bms-alert>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      show: false
    }
  },
  methods: {
    onHide () {
      this.show = false
    },
    on () {
      this.show = true
    }
  }
}
</script>