<template>
  <div>
    <bms-button @click.native="click" title="click to show" type="primary_block"></bms-button>
    <bms-toast :show="show" @time-hide="timeHide">
      <div>第一行</div>
      <div>第二行</div>
    </bms-toast>
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