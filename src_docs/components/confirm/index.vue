<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="基本confirm" :code="default1">
      <confirm-default />
    </bms-code>
    <br>
    <bms-code title="danger主题confirm" :code="danger">
      <confirm-danger />
    </bms-code>
    <br>
    <bms-code title="改变按钮文字内容" :code="text1">
      <confirm-text />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import ConfirmDefault from './ConfirmDefault'
import ConfirmDefaultCode from '!raw!./ConfirmDefault'
import ConfirmDanger from './ConfirmDanger'
import ConfirmDangerCode from '!raw!./ConfirmDanger'
import ConfirmText from './ConfirmText'
import ConfirmTextCode from '!raw!./ConfirmText'
import description from './README.md'
export default {
  data () {
    return {
      default1: ConfirmDefaultCode,
      danger: ConfirmDangerCode,
      text1: ConfirmTextCode,
      text: description,
      api: [{'name': 'show', 'type': 'Boolean', 'default': '', 'description': '控制显示'}, {'name': 'title', 'type': 'String', 'default': '', 'description': '标题显示'}, {'name': 'buttonText1', 'type': 'String', 'default': '确认', 'description': '确认文字'}, {'name': 'buttonText2', 'type': 'String', 'default': '取消', 'description': '取消文字'}, {'name': 'type', 'type': 'String', 'default': 'success', 'description': '主题，接受 success,danger'}],
      emit: [{'name': 'on-hide', 'description': '将子组件隐藏'}, {'name': 'on-confirm', 'description': '点击确定触发事件'}, {'name': 'on-cancel', 'description': '点击取消触发事件'}]
    }
  },
  components: {
    ConfirmDefault,
    ConfirmDanger,
    ConfirmText
  },
  methods: {
  }
}
</script>
