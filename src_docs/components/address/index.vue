<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="address组件" :code="default1">
      <address-default />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import AddressDefault from './AddressDefault'
import AddressDefaultCode from '!raw!./AddressDefault'
import description from './README.md'
export default {
  data () {
    return {
      default1: AddressDefaultCode,
      text: description,
      api: [{'name': 'data', 'type': 'Array', 'default': '[]', 'description': '必填项，传入数据'}, {'name': 'columns', 'type': 'Number', 'default': '', 'description': '必填项，传入数据列数'}, {'name': 'fixedColumns', 'type': 'Number', 'default': '0', 'description': '合并后显示的列数（如果没有传入，则不合并）'}, {'name': 'value', 'type': 'Array', 'default': '[]', 'description': '必填项，当前所选的数组，若没有默认选项，传入[]'}, {'name': 'ActiveColor', 'type': 'String', 'default': '#04be02', 'description': '激活颜色'}, {'name': 'no_value_words', 'type': 'String', 'default': '', 'description': '当value传入值为[]时，传入该参数，做默认显示，类似于placeholder'}, {'name': 'title', 'type': 'String', 'default': '', 'description': '题目'}],
      emit: [{'name': 'on-change', 'description': '传回所选值的name或者value属性'}]
    }
  },
  components: {
    AddressDefault
  },
  methods: {
  }
}
</script>
