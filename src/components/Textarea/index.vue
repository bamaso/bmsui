<template>
  <div class="textarea_cell">
      <textarea
      v-model="child_value"
      :placeholder="placeholder"
      :name="name"
      :rows="rows"
      :cols="cols"
      :style="textareaStyle"
      :maxlength="max"></textarea>
      <div class="textarea_counter" v-show="showCounter && max"><span>{{count}}</span>/{{max}}</div>
  </div>
</template>

<script>
module.exports = {
  name: 'BmsTextarea',
  props: {
    showCounter: {
      type: Boolean,
      default: true
    },
    max: Number,
    value: {
      type: String,
      default: ''
    },
    name: String,
    placeholder: String,
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 30
    },
    height: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      child_value: this.value
    }
  },
  watch: {
    child_value (newVal) {
      if (this.max && this.value.length > this.max) {
        this.child_value = newVal.slice(0, this.max)
      }
      this.$emit('on-change', this.child_value)
    },
    value (val) {
      this.child_value = val
    }
  },
  computed: {
    count () {
      let len = 0
      if (this.child_value) {
        len = this.child_value.replace(/\n/g, 'aa').length
      }
      return len > this.max ? this.max : len
    },
    textareaStyle () {
      if (this.height) {
        return {
          height: this.height
        }
      }
    }
  }
}
</script>
