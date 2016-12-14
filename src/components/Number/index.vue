<template>
  <div class="number_cell" :style="style">
    <div class="number_cell_l">
      {{title}}
    </div>
    <div class="number_cell_r">
      <a @click="sub" class="number-selector number-selector-sub" :class="{'bms-number-disabled':disabledMin}" :style="{color: activeColor}">-</a>
      <input v-model="child_value" :name="name" class="number-input" :style="{width: width,fontSize: fontSize}" number :readonly="!fillable" pattern="[0-9]*"/>
      <a @click="add" class="number-selector number-selector-plus" :class="{'bms-number-disabled':disabledMax}" :style="{color: activeColor}">+</a>
    </div>
  </div>
</template>
<script>
module.exports = {
  name: 'BmsNumber',
  data () {
    return {
      child_value: this.value
    }
  },
  props: {
    min: Number,
    max: Number,
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    name: String,
    title: String,
    fillable: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '50px'
    },
    height: {
      type: String,
      default: '30px'
    },
    fontSize: {
      type: String,
      default: '18px'
    },
    activeColor: {
      type: String,
      default: '#60c897'
    }
  },
  computed: {
    disabledMin () {
      return typeof this.min === 'undefined' ? false : this.child_value <= this.min
    },
    disabledMax () {
      return typeof this.max === 'undefined' ? false : this.child_value >= this.max
    },
    style () {
      return {
        height: this.height,
        lineHeight: this.height,
        fontSize: this.fontSize
      }
    }
  },
  watch: {
    child_value (newValue) {
      if (this.min && this.child_value < this.min) {
        this.child_value = this.min
      }
      if (this.max && this.child_value > this.max) {
        this.child_value = this.max
      }
      this.$emit('on-change', newValue)
    },
    value (val) {
      this.child_value = val
    }
  },
  methods: {
    add () {
      if (!this.disabledMax) {
        this.child_value += this.step
      }
    },
    sub () {
      if (!this.disabledMin) {
        this.child_value -= this.step
      }
    }
  }
}
</script>
