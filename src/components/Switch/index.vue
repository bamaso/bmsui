<template>
<div>
  <input class="bms-switch" v-bind:class="switchClass" type="checkbox" :disabled="disabled" :checked="status=='open'" v-model="value" />
</div>
</template>

<script>
/**
 * @module components/Switch
 * @desc 开关
 * @param {string} [type=success] - 显示类型，接受 primary, warning, success, danger
 * @param {boolean} [disabled=false] - 禁用，接受 true, false
 * @return true,false
 */
module.exports = {
  name: 'BmsSwitch',
  props: {
    status: {
      type: String,
      default: 'close'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'success'
    }
  },
  computed: {
    switchClass () {
      return 'switch-' + this.type
    }
  },
  data () {
    return {
      value: this.status === 'open'
    }
  },
  watch: {
    value (newVal) {
      this.$emit('on-change', newVal)
    },
    status (val) {
      this.value = this.status === 'open'
    }
  }
}
</script>
