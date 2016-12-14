<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="5种主题色switch组件" :code="default1">
      <switch-default />
    </bms-code>
    <br>
    <bms-code title="5种主题色swtich组件的disabled状态" :code="disabled">
      <switch-disabled />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import SwitchDefault from './SwitchDefault'
import SwitchDefaultCode from '!raw!./SwitchDefault'
import SwitchDisabled from './SwitchDisabled'
import SwitchDisabledCode from '!raw!./SwitchDisabled'
import description from './README.md'
export default {
  data () {
    return {
      default1: SwitchDefaultCode,
      disabled: SwitchDisabledCode,
      text: description,
      api: [{'name': 'status', 'type': 'String', 'default': 'close', 'description': '当前switch开关状态,可选值open、close'}, {'name': 'disabled', 'type': 'Boolean', 'default': 'false', 'description': '是否禁用'}, {'name': 'type', 'type': 'String', 'default': 'success', 'description': '主题色'}],
      emit: [{'name': 'on-change', 'description': '将改变后的值传回给父组件'}]
    }
  },
  components: {
    SwitchDefault,
    SwitchDisabled
  },
  methods: {
  }
}
</script>
