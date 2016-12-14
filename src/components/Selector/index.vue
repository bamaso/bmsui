<template>
  <div class="selector_cell" :style="style">
    <div class="selector_title" v-if="title" :style="{width: labelWidth}" >
      {{title}}
    </div>
    <div class="selector_main" :style="{paddingLeft: labelWidth}">
      <select :name="name" v-model="child_value" :disabled="readonly" :style="font" @blur="blur" @focus="focus">
        <option :value="one.key" v-for="one in processOptions">{{one.value}}</option>
      </select>
      <div class="ui-font">&#xe642;</div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'BmsSelector',
  props: {
    title: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    name: String,
    readonly: Boolean,
    value: [String, Number],
    placeholder: String,
    height: {
      type: String,
      default: '44px'
    },
    fontSize: {
      type: String,
      default: '16px'
    },
    theme: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      default_bordercolor: '#dddcd8',
      child_value: this.value,
      border_theme: '',
      border_now: this.default_bordercolor
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.border_theme = this.border
      if (this.placeholder && !this.value) {
        this.child_value = 'placeholder'
      }
    })
  },
  watch: {
    child_value (newValue) {
      this.$emit('on-change', newValue)
    },
    value (val) {
      this.child_value = val
      if (this.placeholder && !val) {
        this.child_value = 'placeholder'
      }
    },
    theme (val) {
      this.border_theme = this.border
    }
  },
  computed: {
    labelWidth () {
      if (this.title) {
        return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1 + 'em'
      } else {
        return 0
      }
    },
    processOptions () {
      if (this.placeholder) {
        this.options.unshift({key: 'placeholder', value: this.placeholder})
      }
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
        lineHeight: parseInt(this.height) - 2 + 'px',
        borderColor: this.border_now
      }
    },
    font () {
      return {
        fontSize: this.fontSize
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
    blur () {
      this.border_now = this.default_bordercolor
    },
    focus () {
      this.border_now = this.border_theme
    }
  }
}
</script>
