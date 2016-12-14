<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="scroller组件" :code="default1">
      <scroller-default />
    </bms-code>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import ScrollerDefault from './ScrollerDefault'
import ScrollerDefaultCode from '!raw!./ScrollerDefault'
import description from './README.md'
export default {
  data () {
    return {
      default1: ScrollerDefaultCode,
      text: description,
      api: [{'name': 'lists', 'type': 'Array', 'default': '', 'description': '内容与跳转的相关信息，详见实例'}, {'name': 'height', 'type': 'Number', 'default': '', 'description': '高度'}, {'name': 'timeout', 'type': 'Number', 'default': '', 'description': '滚动频率'}]
    }
  },
  components: {
    ScrollerDefault
  },
  methods: {
  }
}
</script>
