<template>
  <div class="bms-rater">
    <a class="bms-rater-box" v-for="i in max" @click="handleClick(i-1)" :class="{'is-active':rater_value > i-1}" :style="{color: colors && colors[i-1] ? colors[i-1] : '#ccc',marginRight:margin+'px',fontSize: fontSize + 'px', width: fontSize + 'px', height: fontSize + 'px', lineHeight: fontSize + 'px'}">
      <span class="bms-rater-inner">
        {{star}}
        <span class="bms-rater-outer" :style="{color: activeColor, width: cutPercent + '%'}" v-if="cutPercent > 0 && cutIndex === i-1">
          {{star}}
        </span>
      </span>
    </a>
  </div>
</template>

<script>
/**
 * @module components/Rater
 * @desc 评星模块
 * @param {int} [value] - 显示激活星星数量
 * @param {int} [max] - 星星总数量
 * @param {int} [fontsize] - 星星大小
 * @param {string} [activeColor] - 星星颜色
 */
module.exports = {
  name: 'BmsRater',
  created: function () {
    this.updateStyle()
  },
  props: {
    max: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    },
    disabled: Boolean,
    star: {
      type: String,
      default: '★'
    },
    activeColor: {
      type: String,
      default: '#fc6'
    },
    margin: {
      type: Number,
      default: 2
    },
    fontSize: {
      type: Number,
      default: 25
    }
  },
  computed: {
    sliceValue () {
      const _val = this.rater_value.toString().split('.')
      return _val.length === 1 ? [_val[0], 0] : _val
    },
    cutIndex () {
      return this.sliceValue[0] * 1
    },
    cutPercent () {
      return this.sliceValue[1] * 10
    }
  },
  methods: {
    handleClick (i, force) {
      if (!this.disabled || force) {
        if (this.rater_value === i + 1) {
          this.rater_value = i
        } else {
          this.rater_value = i + 1
        }
      }
    },
    updateStyle () {
      for (var j = 0; j < this.max; j++) {
        if (j <= this.rater_value - 1) {
          this.colors[j] = this.activeColor
        } else {
          this.colors[j] = '#ccc'
        }
      }
    }
  },
  data () {
    return {
      colors: [],
      rater_value: this.value
    }
  },
  watch: {
    rater_value (val) {
      this.updateStyle()
      this.$emit('on-change', val)
    },
    value (val) {
      this.rater_value = val
    }
  }
}
</script>
