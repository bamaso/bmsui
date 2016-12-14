<template>
  <div>
    <bms-button @click.native="on" title="click to show" type="danger_block"></bms-button>
    <bms-confirm :show="show" title="这是标题" buttonText1="1文字" buttonText2="2文字" @on-hide="onHide" @on-confirm="onConfirm" @on-cancel="onCancel"></bms-alert>
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
    on () {
      this.show = true
    },
    onConfirm () {
      console.log('确认')
    },
    onCancel () {
      console.log('取消')
    },
    onHide () {
      this.show = false
    }
  }
}
</script>