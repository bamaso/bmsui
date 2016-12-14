<template>
  <button class="btn-bms" v-bind:class="classes" @click="$emit('click')">{{title}}</button>
</template>

<script>
/**
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, warning, success, danger,
                                                   default_block, primary_block, warning_block, success_block, danger_block
 * @param {string} [size=normal] - 尺寸，接受 small, large
 * @param {boolean} [radius=false] - 圆角，接受 true, false
 * @param {boolean} [shadow=false] - 阴影，接受 true,false
 *
 */
module.exports = {
  name: 'BmsButton',
  props: {
    title: {
      type: String,
      default: '提交'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    radius: {
      type: Boolean,
      default: true
    },
    shadow: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      let result = []
      switch (this.type) {
        case 'default_block':
          result.push('btn-block', 'btn-default')
          break
        case 'primary_block':
          result.push('btn-block', 'btn-primary')
          break
        case 'warning_block':
          result.push('btn-block', 'btn-warning')
          break
        case 'success_block':
          result.push('btn-block', 'btn-success')
          break
        case 'danger_block':
          result.push('btn-block', 'btn-danger')
          break
        case 'default':
          result.push('btn-default')
          break
        case 'primary':
          result.push('btn-primary')
          break
        case 'warning':
          result.push('btn-warning')
          break
        case 'success':
          result.push('btn-success')
          break
        case 'danger':
          result.push('btn-danger')
          break
      }
      switch (this.size) {
        case 'small':
          result.push('small')
          break
        case 'large':
          result.push('large')
          break
      }
      if (!this.radius) result.push('no-radius')
      if (!this.shadow) result.push('no-shadow')
      return result
    }
  }
}
</script>


