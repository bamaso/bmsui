<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="普通rater组件" :code="default1">
      <rater-default />
    </bms-code>
    <br>
    <bms-code title="不能选择的rater组件" :code="disabled">
      <rater-disabled />
    </bms-code>
    <br>
    <bms-code title="修改外观参数" :code="resize">
      <rater-resize />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import RaterDefault from './RaterDefault'
import RaterDefaultCode from '!raw!./RaterDefault'
import RaterDisabled from './RaterDisabled'
import RaterDisabledCode from '!raw!./RaterDisabled'
import RaterResize from './RaterResize'
import RaterResizeCode from '!raw!./RaterResize'
import description from './README.md'
export default {
  data () {
    return {
      default1: RaterDefaultCode,
      disabled: RaterDisabledCode,
      resize: RaterResizeCode,
      text: description,
      api: [{'name': 'max', 'type': 'Number', 'default': '5', 'description': '最大值'}, {'name': 'value', 'type': 'Number', 'default': '0', 'description': '默认值'}, {'name': 'disabled', 'type': 'Boolean', 'default': '', 'description': '是否禁用'}, {'name': 'star', 'type': 'String', 'default': '★', 'description': '星星'}, {'name': 'activeColor', 'type': 'String', 'default': '#fc6', 'description': '激活颜色'}, {'name': 'margin', 'type': 'Number', 'default': '2', 'description': '星星间距'}, {'name': 'fontSize', 'type': 'String', 'default': '25', 'description': '字号'}],
      emit: [{'name': 'on-change', 'description': '所选值改变时,传回该值'}]
    }
  },
  components: {
    RaterDefault,
    RaterDisabled,
    RaterResize
  },
  methods: {
  }
}
</script>
