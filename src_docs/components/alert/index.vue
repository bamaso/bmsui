<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="alert基本样式" :code="default1">
      <alert-default />
    </bms-code>
    <br>
    <bms-code title="alert的danger主题样式" :code="danger">
      <alert-danger />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import AlertDefault from './AlertDefault'
import AlertDefaultCode from '!raw!./AlertDefault'
import AlertDanger from './AlertDanger'
import AlertDangerCode from '!raw!./AlertDanger'
import description from './README.md'
export default {
  data () {
    return {
      default1: AlertDefaultCode,
      danger: AlertDangerCode,
      text: description,
      api: [{'name': 'show', 'type': 'Boolean', 'default': 'false', 'description': '控制显示'}, {'name': 'hideOnBlur', 'type': 'Boolean', 'default': '', 'description': '点击遮罩层，是否能取消显示'}, {'name': 'scroll', 'type': 'Boolean', 'default': 'true', 'description': 'alert显示时，背景是否可以滚动'}, {'name': 'title', 'type': 'String', 'default': '', 'description': 'alert标题显示'}, {'name': 'buttonText', 'type': 'String', 'default': 'OK', 'description': '按钮文字'}, {'name': 'type', 'type': 'String', 'default': 'success', 'description': '传入主题（可选success、danger）'}],
      emit: [{'name': 'on-hide', 'description': '将子组件隐藏'}]
    }
  },
  components: {
    AlertDefault,
    AlertDanger
  },
  methods: {
  }
}
</script>
