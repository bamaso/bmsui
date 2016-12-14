<template>
  <transition :name="transition" v-if="show">
    <router-link :to="{ path: url }" class="bms-msg">
      {{text}}
      <i class="ui-font">&#xe64c;</i>
    </router-link>
  </transition>
</template>

<script>
module.exports = {
  name: 'BmsMessage',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 2500
    },
    transition: {
      type: String,
      default: 'bms-msg'
    },
    url: String,
    text: String
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
