<template>
  <div class="bms-radios">
    <label :for="'bms_radio_'+uuid+index" v-for="(one, index) in processOptions" :style="style">
      <div class="radio-show">
        <input type="radio" v-model="child_value" :id="'bms_radio_'+uuid+index" :value="one['key']">
        <span class="radio-checked" :style="{borderColor: color}"><i :style="{backgroundColor: color}"></i></span>
      </div>
      <div class="radio-content">
        {{one['value']}}
      </div>
    </label>
  </div>
</template>

<script>
module.exports = {
  name: 'BmsRadio',
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '40px'
    },
    border: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      child_value: '',
      default_bordercolor: '#af9b9d',
      uuid: Math.random().toString(36).substring(3, 8)
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.child_value = this.value
    })
  },
  computed: {
    processOptions () {
      if (this.options.length && {}.hasOwnProperty.call(this.options[0], 'key')) {
        return this.options
      } else {
        return this.options.map(function (item) {
          return {
            key: item,
            value: item
          }
        })
      }
    },
    style () {
      return {
        height: this.height,
        lineHeight: parseInt(this.height) - 1 + 'px',
        borderColor: !this.border && 'transparent'
      }
    },
    color () {
      if (this.theme === 'warning') {
        return '#fadd7f'
      }
      if (this.theme === 'success') {
        return '#a0dfcc'
      }
      if (this.theme === 'danger') {
        return '#e36b77'
      }
      if (this.theme === 'primary') {
        return '#a5c8f0'
      }
      return this.default_bordercolor
    }
  },
  watch: {
    child_value (newVal) {
      this.$emit('on-change', newVal)
    },
    value (val) {
      this.child_value = val
    }
  }
}
</script>
