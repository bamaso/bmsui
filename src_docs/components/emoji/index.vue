<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="emoji组件" :code="default1">
      <emoji-default />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <!-- <bms-api :api="api"></bms-api>  -->
  </div>
</template>
<script>
import EmojiDefault from './EmojiDefault'
import EmojiDefaultCode from '!raw!./EmojiDefault'
import description from './README.md'
export default {
  data () {
    return {
      default1: EmojiDefaultCode,
      text: description,
      api: [],
      emit: [{'name': 'add-img', 'description': '传回所选emoji的url'}]
    }
  },
  components: {
    EmojiDefault
  },
  methods: {
  }
}
</script>
