<template>
  <div class="bms-popup" @touchmove="!this.scroll && $event.preventDefault()">
    <transition :name="maskTransition">
      <div class="bms-mask" @click="hideOnBlur && $emit('on-hide')" v-show="show"></div>
    </transition>
    <transition :name="PopupTransition">
      <div class="pop-main" v-show="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
module.exports = {
  name: 'BmsPopup',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'bms-fade'
    },
    PopupTransition: {
      type: String,
      default: 'bms-popup'
    },
    hideOnBlur: {
      type: Boolean,
      default: true
    },
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
