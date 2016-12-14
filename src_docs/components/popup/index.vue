<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="popup基本样式" :code="default1">
      <popup-default />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import PopupDefault from './PopupDefault'
import PopupDefaultCode from '!raw!./PopupDefault'
import description from './README.md'
export default {
  data () {
    return {
      default1: PopupDefaultCode,
      text: description,
      api: [{'name': 'show', 'type': 'Boolean', 'default': 'false', 'description': '控制显示'}, {'name': 'hideOnBlur', 'type': 'Boolean', 'default': '', 'description': '点击遮罩层，是否能取消显示'}],
      emit: [{'name': 'on-hide', 'description': '将子组件隐藏'}]
    }
  },
  components: {
    PopupDefault
  },
  methods: {
  }
}
</script>
