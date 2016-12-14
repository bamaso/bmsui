<template>
  <div>
    <bms-button @click.native="click" title="click to show" type="primary_block"></bms-button>
    <bms-toast :show="show" @time-hide="timeHide" text="显示时长4秒" :time="4000"></bms-toast>
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