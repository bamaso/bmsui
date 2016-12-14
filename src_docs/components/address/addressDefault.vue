<template>
  <div>
    <bms-address :data="addr" :columns=3 :value="value" title="地址选择" no_value_words="请选择城市" @on-choose="onChoose"></bms-address>
  </div>
</template>

<script>
export default {
  methods: {
    onChoose (val) {
      console.log('点击确定时间后进行的操作，将值传给页面显示的address')
      this.value = val['value']
      console.log('所选选项的name：' + val['name'])
    }
  },
  data () {
    return {
      addr: [{'name': '河北省', 'value': '130000'}, {'name': '石家庄市', 'value': '130100', 'parent': '130000'}, {'name': '裕华区', 'value': '130108', 'parent': '130100'}, {'name': '新华区', 'value': '130109', 'parent': '130100'}, {'name': '山西省', 'value': '140000'}, {'name': '太原市', 'value': '140100', 'parent': '140000'}, {'name': '市区', 'value': '140108', 'parent': '140100'}],
      value: []
    }
  }
}
</script>
