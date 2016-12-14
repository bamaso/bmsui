<template>
  <div class="bms-tab-item" :class="[selected ? activeClass : '', {'bms-tab-selected': selected}]" :style="style" @click="onItemClick">
    <slot></slot>
  </div>
</template>

<script>
module.exports = {
  name: 'BmsTabitem',
  props: {
    activeClass: String,
    disabled: Boolean
  },
  data () {
    return {
      selected: false
    }
  },
  computed: {
    style () {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.selected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        height: this.$parent.height,
        lineHeight: this.$parent.height,
        fontSize: this.$parent.fontSize
      }
    }
  },
  methods: {
    onItemClick () {
      if (typeof this.disabled === 'undefined' || this.disabled === false) {
        this.$parent.onParentClick()
        this.selected = true
        this.$emit('on-item-click', this.$el.innerText)
      }
    }
  }
}
</script>