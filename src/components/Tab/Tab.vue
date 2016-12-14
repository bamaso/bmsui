<template>
  <div class="bms-tab">
    <slot></slot>
  </div>
</template>

<script>
/**
 * @module components/Tab
 * @desc 标签页
 * @param {string} [fontSize] - 字体大小
 * @param {string} [height] - tab高度
 * @param {string} [activeColor] - 自定义激活颜色
 * @param {int} [first_active] - 自定义激活tab
 */
module.exports = {
  name: 'BmsTab',
  props: {
    activeColor: {
      type: String,
      default: '#04be02'
    },
    defaultColor: {
      type: String,
      default: '#333'
    },
    disabledColor: {
      type: String,
      default: '#ddd'
    },
    height: {
      type: String,
      default: '44px'
    },
    first_active: {
      type: Number,
      default: 0
    },
    fontSize: {
      type: String,
      default: '14px'
    }
  },
  methods: {
    onParentClick () {
      let len = this.$children.length
      for (let i = 0; i < len; i++) {
        this.$children[i].selected = false
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.$children[this.first_active].selected = true
    })
  }
}
</script>
