<template>
  <div>
    <bms-button @click.native="show" title="click to show" type="warning_block"></bms-button>
    <bms-popup :show="s" @on-hide="onHide">
      <ul>
        <li>第一行</li>
        <li>第二行</li>
        <li>第三行</li>
      </ul>
    </bms-popup>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      s: false
    }
  },
  methods: {
    show () {
      this.s = true
    },
    onHide () {
      this.s = false
    }
  }
}
</script>