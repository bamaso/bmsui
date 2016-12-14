<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="基本textarea框" :code="default1">
      <textarea-default />
    </bms-code>
    <br>
    <bms-code title="不显示字数且有最大字数限制" :code="nocount">
      <textarea-nocount />
    </bms-code>
    <br>
    <bms-code title="有字数显示" :code="count">
      <textarea-count />
    </bms-code>
    <br>
    <bms-code title="修改基本样式" :code="resize">
      <textarea-resize />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import TextareaDefault from './TextareaDefault'
import TextareaDefaultCode from '!raw!./TextareaDefault'
import TextareaNocount from './TextareaNocount'
import TextareaNocountCode from '!raw!./TextareaNocount'
import TextareaCount from './TextareaCount'
import TextareaCountCode from '!raw!./TextareaCount'
import TextareaResize from './TextareaResize'
import TextareaResizeCode from '!raw!./TextareaResize'
import description from './README.md'
export default {
  data () {
    return {
      default1: TextareaDefaultCode,
      nocount: TextareaNocountCode,
      count: TextareaCountCode,
      resize: TextareaResizeCode,
      text: description,
      api: [{'name': 'showCounter', 'type': 'Boolean', 'default': 'true', 'description': '是否显示字数'}, {'name': 'max', 'type': 'Number', 'default': '', 'description': '最大字数限制'}, {'name': 'value', 'type': 'String', 'default': '', 'description': '默认值'}, {'name': 'name', 'type': 'String', 'default': '', 'description': 'textarea框name属性'}, {'name': 'placeholder', 'type': 'String', 'default': '', 'description': 'textarea框内容'}, {'name': 'rows', 'type': 'Number', 'default': '3', 'description': '行数'}, {'name': 'cols', 'type': 'Number', 'default': '30', 'description': '列数'}, {'name': 'height', 'type': 'String', 'default': '', 'description': '高度'}],
      emit: [{'name': 'on-change', 'description': 'textarea框内容改变时将值传回'}]
    }
  },
  components: {
    TextareaDefault,
    TextareaNocount,
    TextareaCount,
    TextareaResize
  },
  methods: {
  }
}
</script>
