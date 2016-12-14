<template>
  <div class="bms-toast">
    <div class="bms-mask" v-show="show"></div>
    <transition :name="transition">
      <div class="bms-toast-show" :style="{width: width}" v-show="show">
        <div class="icon-block" :class="toastClass"><i class="ui-font" :class="icontoastClass"></i></div>
        <div class="bms-toast-content" v-if="text" v-html="text"></div>
        <div class="bms-toast-content" v-else><slot></slot></div>
      </div>
    </transition>
  </div>
</template>

<script>
module.exports = {
  name: 'BmsToast',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 2000
    },
    transition: {
      type: String,
      default: 'bms-fade'
    },
    type: {
      type: String,
      default: 'success'
    },
    width: {
      type: String,
      default: '120px'
    },
    text: String
  },
  computed: {
    icontoastClass () {
      return {
        'icon-success': this.type === 'success',
        'icon-warning': this.type === 'danger'
      }
    },
    toastClass () {
      return {
        'block-success': this.type === 'success',
        'block-danger': this.type === 'danger'
      }
    }
  },
  watch: {
    show (val) {
      if (val) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.$emit('time-hide')
        }, this.time)
      }
    }
  }
}
</script>
