<template>
  <div class="bms_cell" :style="style">
    <div class="bms_cell_l" v-if="title" :style="{width: labelWidth}">
      {{title}}
    </div>
    <div class="bms_cell_r" :style="{paddingLeft: labelWidth}">
      <input class="bms_input" v-model="child_value"
        :pattern="pattern"
        :placeholder="placeholder"
        :readonly="readonly"
        :name="name"
        @blur="blur"
        @focus="focus"/>
    </div>
    <div class="bms_cell_ft">
      <i v-if="child_value && !readonly" class="ui-font close" @click="clear">&#xe61a;</i>
      <i v-if="!valid" class="ui-font alert">&#xe830;</i>
    </div>
  </div>
</template>

<script>
const validators = {
  'china-mobile': {
    fn (str) {
      return /^1[34578]\d{9}$/.test(str)
    },
    msg: '手机号码'
  },
  'china-name': {
    fn (str) {
      return !!str && str.length >= 2 && str.length <= 6
    },
    msg: '中文姓名'
  },
  'required': {
    fn (str) {
      return !!str && !!str.trim().length
    },
    msg: '必填项'
  }
}
module.exports = {
  name: 'BmsInput',
  data () {
    return {
      valid: true,
      default_bordercolor: '#dddcd8',
      child_value: '',
      border_theme: '',
      border_now: this.default_bordercolor
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.border_theme = this.border
      this.child_value = this.value
    })
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    min: Number,
    max: Number,
    value: {
      type: [String, Number],
      default: ''
    },
    name: String,
    isType: String,
    height: {
      type: String,
      default: '44px'
    },
    theme: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    pattern () {
      if (this.type === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*'
      }
    },
    style () {
      return {
        height: this.height,
        lineHeight: parseInt(this.height) - 10 + 'px',
        borderColor: this.border_now
      }
    },
    labelWidth () {
      let len = this.title.replace(/[^x00-xff]/g, '00').length
      if (len > 0) {
        return len / 2 + 1 + 'em'
      } else {
        return 0
      }
    },
    border () {
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
  methods: {
    clear () {
      this.child_value = ''
    },
    blur () {
      this.border_now = this.default_bordercolor
      this.validate()
      this.$emit('on-valid', this.valid)
    },
    focus () {
      this.border_now = this.border_theme
    },
    validate () {
      const validator = validators[this.isType]
      if (validator) {
        this.valid = validator[ 'fn' ](this.child_value)
        if (!this.valid) {
          return
        }
      }
      if (this.min) {
        if (this.child_value.length < this.min) {
          this.valid = false
          return
        }
      }
      if (this.max) {
        if (this.child_value.length > this.max) {
          this.valid = false
          return
        }
      }
      this.valid = true
    }
  },
  watch: {
    child_value (newVal) {
      this.validate()
      this.$emit('on-valid', this.valid)
      this.$emit('on-change', newVal)
    },
    value (val) {
      this.child_value = val
    },
    theme (val) {
      this.border_theme = this.border
    }
  }
}
</script>
