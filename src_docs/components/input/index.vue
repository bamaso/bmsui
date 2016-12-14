<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="普通input框" :code="default1">
      <input-default />
    </bms-code>
    <br>
    <bms-code title="修改input框的高度" :code="height">
      <input-height />
    </bms-code>
    <br>
    <bms-code title="input框为只读" :code="read">
      <input-read />
    </bms-code>
    <br>
    <bms-code title="input框的5种主题" :code="theme">
      <input-theme />
    </bms-code>
    <br>
    <bms-code title="input框的输入类型为数字类型" :code="type">
      <input-type />
    </bms-code>
    <br>
    <bms-code title="input框带有验证信息（4种）" :code="valid">
      <input-valid />
    </bms-code>
    <br>
    <bms-code title="传入默认值" :code="value">
      <input-value />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import InputDefault from './InputDefault'
import InputDefaultCode from '!raw!./InputDefault'
import InputHeight from './InputHeight'
import InputHeightCode from '!raw!./InputHeight'
import InputRead from './InputRead'
import InputReadCode from '!raw!./InputRead'
import InputTheme from './InputTheme'
import InputThemeCode from '!raw!./InputTheme'
import InputType from './InputType'
import InputTypeCode from '!raw!./InputType'
import InputValid from './InputValid'
import InputValidCode from '!raw!./InputValid'
import InputValue from './InputValue'
import InputValueCode from '!raw!./InputValue'
import description from './README.md'
export default {
  data () {
    return {
      default1: InputDefaultCode,
      height: InputHeightCode,
      read: InputReadCode,
      theme: InputThemeCode,
      type: InputTypeCode,
      valid: InputValidCode,
      value: InputValueCode,
      text: description,
      api: [{'name': 'title', 'type': 'String', 'default': '', 'description': '题目'}, {'name': 'type', 'type': 'String', 'default': 'text', 'description': 'input输入类型(text、number)'}, {'name': 'placeholder', 'type': 'String', 'default': '', 'description': ''}, {'name': 'readonly', 'type': 'Boolean', 'default': '', 'description': '是否为只读'}, {'name': 'min', 'type': 'Number', 'default': '', 'description': '最小值'}, {'name': 'max', 'type': 'Number', 'default': '', 'description': '最大值'}, {'name': 'value', 'type': 'Number、String', 'default': '', 'description': '默认值'}, {'name': 'name', 'type': 'String', 'default': '', 'description': 'input框name属性'}, {'name': 'isType', 'type': 'String', 'default': '', 'description': '验证类型(3种: china-mobile、china-name、required)'}, {'name': 'height', 'type': 'String', 'default': '44px', 'description': 'input框高度'}, {'name': 'theme', 'type': 'String', 'default': 'default', 'description': '主题(5种:default,priamry,danger,warning,success)'}],
      emit: [{'name': 'on-change', 'description': 'input值改变时,传回该值'}]
    }
  },
  components: {
    InputDefault,
    InputHeight,
    InputRead,
    InputTheme,
    InputType,
    InputValid,
    InputValue
  },
  methods: {
  }
}
</script>
