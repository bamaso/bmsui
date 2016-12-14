<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="toast默认样式" :code="default1">
      <toast-default />
    </bms-code>
    <br>
    <bms-code title="toast的danger主题样式" :code="danger">
      <toast-danger />
    </bms-code>
    <br>
    <bms-code title="改变toast的显示时间（默认为2000ms）" :code="time">
      <toast-time />
    </bms-code>
    <br>
    <bms-code title="改变toast的宽度（默认为120px）" :code="width">
      <toast-width />
    </bms-code>
    <br>
    <bms-code title="改变toast的动画显示（默认为fade）" :code="animate">
      <toast-animate />
    </bms-code>
    <br>
    <bms-code title="改变toast的显示内容" :code="content">
      <toast-content />
    </bms-code>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import ToastDefault from './ToastDefault'
import ToastDefaultCode from '!raw!./ToastDefault'
import ToastDanger from './ToastDanger'
import ToastDangerCode from '!raw!./ToastDanger'
import ToastTime from './ToastTime'
import ToastTimeCode from '!raw!./ToastTime'
import ToastWidth from './ToastWidth'
import ToastWidthCode from '!raw!./ToastWidth'
import ToastAnimate from './ToastAnimate'
import ToastAnimateCode from '!raw!./ToastAnimate'
import ToastContent from './ToastContent'
import ToastContentCode from '!raw!./ToastContent'
import description from './README.md'
export default {
  data () {
    return {
      default1: ToastDefaultCode,
      danger: ToastDangerCode,
      time: ToastTimeCode,
      width: ToastWidthCode,
      animate: ToastAnimateCode,
      content: ToastContentCode,
      text: description,
      api: [{'name': 'show', 'type': 'Boolean', 'default': 'false', 'description': '控制显示'}, {'name': 'time', 'type': 'Number', 'default': '2000', 'description': '控制显示时长'}, {'name': 'transition', 'type': 'String', 'default': 'bms-fade', 'description': '显示动画（可选值有bms-dialog，bms-fade）'}, {'name': 'type', 'type': 'String', 'default': 'success', 'description': '主题（可选值有success，danger）'}, {'name': 'width', 'type': 'String', 'default': '120px', 'description': '显示宽度'}, {'name': 'text', 'type': 'String', 'default': '', 'description': '传入内容'}]
    }
  },
  components: {
    ToastDefault,
    ToastDanger,
    ToastTime,
    ToastWidth,
    ToastAnimate,
    ToastContent
  },
  methods: {
  }
}
</script>
