<template>
<div class="bms-emoji-box">
  <i class="ui-font" @click="show = !show">&#xe61c;</i>
  <div class="bms-emoji" :style="{padding: padding+'px'}" v-if="show">
    <div class="show-emoji" v-for="row in rows" :style="{backgroundPosition: -(row-1)*position+'px'}" @click="choose(row)">
    </div>
  </div>
</div>
</template>

<script>
module.exports = {
  name: 'BmsEmoji',
  data () {
    return {
      rows: 0,
      columns: 0,
      padding: 0,
      position: 0,
      show: false
    }
  },
  created () {
    this.columns = parseInt(document.body.clientWidth / 24)
    this.padding = document.body.clientWidth % 24 / 2
    if (this.padding === 0) {
      this.columns--
      this.padding = 12
    }
    let rows = parseInt(135 / this.columns)
    if (135 % this.columns > 0) {
      rows++
    }
    this.rows = rows
    this.position = 24 * this.columns
  },
  methods: {
    choose (i, event) {
      var e = event || window.event
      let num = this.columns * (i - 1) + parseInt(e.layerX / 24)
      let url = ''
      if (num < 105) {
        url = `https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${num}.gif`
      } else {
        url = `http://source.bamasoso.com/bmsui/emoji/emoji${num}.jpg/wm`
      }
      // let img = `<img src='${url}' />`
      this.$emit('add-img', url)
      this.show = false
    }
  }
}
</script>
