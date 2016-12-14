<template>
<div>
  <div class="show-address">
    <div v-if="title">{{title}}</div>
    <div v-text="html_value" @click="open_addr" :style="{textAlign: title ? 'right' : 'left'}"></div>
  </div>
  <bms-popup :show="show_addr">
    <div class="address-choose" :style="{color: ActiveColor}">
      <div @click="show_addr = false">取消</div>
      <div @click="click_finish">完成</div>
    </div>
    <div class="bms-address">
      <div class="address-item" v-for="(one, index) in child_data" :id="'bms-address-' + uuid + '-' + index"></div>
    </div>
  </bms-popup>
</div>
</template>

<script>
import Scroller from './scroller'
import Manager from './chain'
import BmsPopup from '../Popup'
import Transform2name from './value_to_name.js'
module.exports = {
  name: 'BmsAddress',
  created () {
    this.html_value = this.show_value(this.value)
    this.store = new Manager(this.data, this.columns, this.fixedColumns)
    this.child_data = this.store.getColumns(this.value)
  },
  mounted: function () {
    this.$nextTick(() => {
      this.render(this.child_data, this.value)
    })
  },
  components: {
    BmsPopup
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    columns: {
      type: Number,
      required: true
    },
    fixedColumns: {
      type: Number,
      default: 0
    },
    value: {
      type: Array,
      required: true
    },
    ActiveColor: {
      type: String,
      default: '#04be02'
    },
    no_value_words: {
      type: String
    },
    title: {
      type: String
    }
  },
  methods: {
    getId (i) {
      return `#bms-address-${this.uuid}-${i}`
    },
    render (data, value) {
      this.count = this.child_data.length
      const _this = this
      let count = this.child_data.length
      for (let i = 0; i < count; i++) {
        _this.scroller[i] && _this.scroller[i].destroy()
        _this.scroller[i] = new Scroller(_this.getId(i), {
          data: data[i],
          defaultValue: value[i] || data[i][0].value,
          onSelect (value) {
            _this.renderChain(i + 1)
          }
        })
        // if (_this.child_value) {
        //   _this.scroller[i].select(value[i])
        // }
      }
    },
    renderChain (i) {
      if (i > this.count - 1) {
        return
      }
      const _this = this
      let ID = this.getId(i)
      // destroy old one
      this.scroller[i].destroy()
      let list = this.store.getChildren(_this.getValue()[i - 1])
      this.scroller[i] = new Scroller(ID, {
        data: list,
        onSelect (value) {
          _this.renderChain(i + 1)
        }
      })
      this.renderChain(i + 1)
    },
    getValue (show) {
      let data = []
      for (let i = 0; i < this.child_data.length; i++) {
        if (this.scroller[i]) {
          data.push(this.scroller[i].value)
        } else {
          return []
        }
      }
      if (show) {
        return Transform2name(data, this.data).split(' ')
      } else {
        return data
      }
    },
    open_addr () {
      this.child_data = this.store.getColumns(this.value)
      this.$nextTick(function () {
        this.render(this.child_data, this.value)
      })
      this.show_addr = true
    },
    click_finish () {
      this.show_addr = false
      let data = []
      data['name'] = this.getValue(true)
      data['value'] = this.getValue()
      this.$emit('on-choose', data)
      this.html_value = this.show_value(data['value'])
    },
    show_value (val) {
      if (val.length === 0) {
        return this.no_value_words
      }
      let value = []
      if (this.data.length > 0) {
        value = Transform2name(val, this.data).split(' ')
      } else {
        return ''
      }
      let len = value.length
      let str = ''
      for (let i = 0; i < len; i++) {
        str += value[i] + ' '
      }
      return str
    }
  },
  data () {
    return {
      scroller: [],
      count: 0,
      uuid: Math.random().toString(36).substring(3, 8),
      child_data: '',
      show_addr: false,
      html_value: ''
    }
  },
  watch: {
    data (newData) {
      if (newData.length === 0) {
        return
      }
      this.html_value = this.show_value(this.value)
      const length = this.columns
      this.store = new Manager(newData, length, this.fixedColumns)
      this.child_data = this.store.getColumns(this.value)
      this.$nextTick(function () {
        this.render(this.child_data, this.value)
      })
    },
    value (val) {
      this.html_value = this.show_value(this.value)
    }
  },
  beforeDestroy () {
    for (let i = 0; i < this.count; i++) {
      this.scroller[i].destroy()
      this.scroller[i] = null
    }
  }
}
</script>

