<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="普通radio组件" :code="default1">
      <radio-default />
    </bms-code>
    <br>
    <bms-code title="有默认选中项" :code="value">
      <radio-value />
    </bms-code>
    <br>
    <bms-code title="5种主题色" :code="theme">
      <radio-theme />
    </bms-code>
    <br>
    <bms-code title="修改外观参数" :code="resize">
      <radio-resize />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import RadioDefault from './RadioDefault'
import RadioDefaultCode from '!raw!./RadioDefault'
import RadioValue from './RadioValue'
import RadioValueCode from '!raw!./RadioValue'
import RadioTheme from './RadioTheme'
import RadioThemeCode from '!raw!./RadioTheme'
import RadioResize from './RadioResize'
import RadioResizeCode from '!raw!./RadioResize'
import description from './README.md'
export default {
  data () {
    return {
      default1: RadioDefaultCode,
      value: RadioValueCode,
      theme: RadioThemeCode,
      resize: RadioResizeCode,
      text: description,
      api: [{'name': 'options', 'type': 'Array', 'default': '', 'description': '必填项,{key:"",value:""}的形式传入键值对'}, {'name': 'value', 'type': 'String', 'default': '', 'description': '默认值'}, {'name': 'height', 'type': 'String', 'default': '40px', 'description': '高度'}, {'name': 'border', 'type': 'Boolean', 'default': 'true', 'description': '是否有border'}, {'name': 'theme', 'type': 'String', 'default': 'default', 'description': '主题色,共有5种可选(default、danger、warning、success、primary)'}],
      emit: [{'name': 'on-change', 'description': '所选值改变时,传回该值的key'}]
    }
  },
  components: {
    RadioDefault,
    RadioValue,
    RadioTheme,
    RadioResize
  },
  methods: {
  }
}
</script>
