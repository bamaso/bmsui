<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="弹幕" :code="default1">
      <msg-default />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import MsgDefault from './MsgDefault'
import MsgDefaultCode from '!raw!./MsgDefault'
import description from './README.md'
export default {
  data () {
    return {
      default1: MsgDefaultCode,
      text: description,
      api: [{'name': 'show', 'type': 'Boolean', 'default': '', 'description': '控制显示'}, {'name': 'time', 'type': 'Number', 'default': '2500', 'description': '显示时长'}, {'name': 'url', 'type': 'String', 'default': '', 'description': '跳转链接'}, {'name': 'text', 'type': 'String', 'default': '', 'description': '弹幕消息文字显示'}],
      emit: [{'name': 'on-hide', 'description': '将子组件隐藏'}]
    }
  },
  components: {
    MsgDefault
  },
  methods: {
  }
}
</script>
