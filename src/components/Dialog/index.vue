<template>
  <div class="bms-dialog" @touchmove="!this.scroll && $event.preventDefault()">
    <transition :name="maskTransition">
      <div class="bms-mask" @click="hideOnBlur && $emit('on-hide')" v-show="show"></div>
    </transition>
    <transition :name="dialogTransition">
      <div class="bms-dialog-main" v-show="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
module.exports = {
  name: 'BmsDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'bms-fade'
    },
    dialogTransition: {
      type: String,
      default: 'bms-dialog'
    },
    hideOnBlur: Boolean,
    scroll: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  watch: {
    show (val) {
      this.$emit(val ? 'on-show' : 'on-hide')
    }
  }
}
</script>
