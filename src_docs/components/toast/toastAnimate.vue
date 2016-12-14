<template>
  <div>
    <bms-button @click.native="click" title="click to show" type="primary_block"></bms-button>
    <bms-toast :show="show" @time-hide="timeHide" transition="bms-dialog" text="对话框动画过渡"></bms-toast>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    click () {
      this.show = true
    },
    timeHide () {
      this.show = false
    }
  }
}
</script>