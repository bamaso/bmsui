<template>
  <div>
    <bms-button @click.native="dianji" type="success_block">点击</bms-button>
    <bms-message :show='show' @time-hide="onHide" :time="3000" text="1秒前，何硕下了一个单何硕下了一个单何硕下了一个单"></bms-message>
  </div>
</template>

<script>
module.exports = {
  name: 'ShowMessage',
  data () {
    return {
      show: false
    }
  },
  methods: {
    dianji () {
      this.show = true
    },
    onHide () {
      this.show = false
    }
  }
}
</script>
