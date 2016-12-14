<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="普通select元素" :code="default1">
      <selector-default />
    </bms-code>
    <br>
    <bms-code title="带有placeholder的select元素" :code="placeholder">
      <selector-placeholder />
    </bms-code>
    <br>
    <bms-code title="select元素为只读" :code="read">
      <selector-read />
    </bms-code>
    <br>
    <bms-code title="select元素的5种主题" :code="theme">
      <selector-theme />
    </bms-code>
    <br>
    <bms-code title="修改select的基本样式" :code="resize">
      <selector-resize />
    </bms-code>
    <br>
    <bms-code title="传入默认值" :code="value">
      <selector-value />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import SelectorDefault from './SelectorDefault'
import SelectorDefaultCode from '!raw!./SelectorDefault'
import selectorPlaceholder from './selectorPlaceholder'
import selectorPlaceholderCode from '!raw!./selectorPlaceholder'
import SelectorRead from './SelectorRead'
import SelectorReadCode from '!raw!./SelectorRead'
import SelectorTheme from './SelectorTheme'
import SelectorThemeCode from '!raw!./SelectorTheme'
import SelectorResize from './SelectorResize'
import SelectorResizeCode from '!raw!./SelectorResize'
import SelectorValue from './SelectorValue'
import SelectorValueCode from '!raw!./SelectorValue'
import description from './README.md'
export default {
  data () {
    return {
      default1: SelectorDefaultCode,
      placeholder: selectorPlaceholderCode,
      read: SelectorReadCode,
      theme: SelectorThemeCode,
      resize: SelectorResizeCode,
      value: SelectorValueCode,
      text: description,
      api: [{'name': 'title', 'type': 'String', 'default': '', 'description': '题目'}, {'name': 'options', 'type': 'Array', 'default': '', 'description': '必填项,[{key:, value:}]键值对传入参数'}, {'name': 'name', 'type': 'String', 'default': '', 'description': 'select元素name属性'}, {'name': 'placeholder', 'type': 'String', 'default': '', 'description': '默认显示内容'}, {'name': 'readonly', 'type': 'Boolean', 'default': '', 'description': '是否为只读'}, {'name': 'value', 'type': 'Number、String', 'default': '', 'description': '默认值'}, {'name': 'height', 'type': 'String', 'default': '44px', 'description': 'select元素高度'}, {'name': 'theme', 'type': 'String', 'default': 'default', 'description': '主题(5种:default,priamry,danger,warning,success)'}, {'name': 'fontSize', 'type': 'String', 'default': '16px', 'description': '字号'}],
      emit: [{'name': 'on-change', 'description': 'select选择值改变时,传回该值'}]
    }
  },
  components: {
    SelectorDefault,
    selectorPlaceholder,
    SelectorRead,
    SelectorTheme,
    SelectorResize,
    SelectorValue
  },
  methods: {
  }
}
</script>
