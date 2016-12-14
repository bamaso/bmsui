<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="default-button" :code="default1">
      <button-default />
    </bms-code>
    <br>
    <bms-code title="warning-button" :code="warning">
      <button-warning />
    </bms-code>
    <br>
    <bms-code title="danger-button" :code="danger">
      <button-danger />
    </bms-code>
    <br>
    <bms-code title="primary-button" :code="primary">
      <button-primary />
    </bms-code>
    <br>
    <bms-code title="success-button" :code="success">
      <button-success />
    </bms-code>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import ButtonDefault from './ButtonDefault'
import ButtonDefaultCode from '!raw!./ButtonDefault'
import ButtonWarning from './ButtonWarning'
import ButtonWarningCode from '!raw!./ButtonWarning'
import ButtonDanger from './ButtonDanger'
import ButtonDangerCode from '!raw!./ButtonDanger'
import ButtonPrimary from './ButtonPrimary'
import ButtonPrimaryCode from '!raw!./ButtonPrimary'
import ButtonSuccess from './ButtonSuccess'
import ButtonSuccessCode from '!raw!./ButtonSuccess'
import description from './README.md'
export default {
  data () {
    return {
      default1: ButtonDefaultCode,
      warning: ButtonWarningCode,
      danger: ButtonDangerCode,
      primary: ButtonPrimaryCode,
      success: ButtonSuccessCode,
      text: description,
      api: [{'name': 'title', 'type': 'String', 'default': '提交', 'description': '按钮文字'}, {'name': 'type', 'type': 'String', 'default': 'default', 'description': '显示类型，接受参数：default, primary, warning, success, danger,default_block, primary_block, warning_block, success_block, danger_block'}, {'name': 'size', 'type': 'String', 'default': 'normal', 'description': '尺寸，接受 small, large'}, {'name': 'radius', 'type': 'Boolean', 'default': 'true', 'description': '圆角，接受 true, false'}, {'name': 'shadow', 'type': 'Boolean', 'default': 'true', 'description': '阴影，接受 true,false'}]
    }
  },
  components: {
    ButtonDefault,
    ButtonWarning,
    ButtonDanger,
    ButtonPrimary,
    ButtonSuccess
  },
  methods: {
  }
}
</script>
