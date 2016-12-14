<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="普通number组件" :code="default1">
      <number-default />
    </bms-code>
    <br>
    <bms-code title="赋予初始值" :code="init">
      <number-init />
    </bms-code>
    <br>
    <bms-code title="number不可聚焦，即不可手动改变值大小" :code="nofocus">
      <number-nofocus />
    </bms-code>
    <br>
    <bms-code title="修改外观参数" :code="resize">
      <number-resize />
    </bms-code>
    <br>
    <bms-code title="修改步数增长基数" :code="step">
      <number-step />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import NumberDefault from './NumberDefault'
import NumberDefaultCode from '!raw!./NumberDefault'
import NumberInit from './NumberInit'
import NumberInitCode from '!raw!./NumberInit'
import NumberNofocus from './NumberNofocus'
import NumberNofocusCode from '!raw!./NumberNofocus'
import NumberNotitle from './NumberNotitle'
import NumberNotitleCode from '!raw!./NumberNotitle'
import NumberResize from './NumberResize'
import NumberResizeCode from '!raw!./NumberResize'
import NumberStep from './NumberStep'
import NumberStepCode from '!raw!./NumberStep'
import description from './README.md'
export default {
  data () {
    return {
      default1: NumberDefaultCode,
      init: NumberInitCode,
      nofocus: NumberNofocusCode,
      notitle: NumberNotitleCode,
      resize: NumberResizeCode,
      step: NumberStepCode,
      text: description,
      api: [{'name': 'min', 'type': 'Number', 'default': '', 'description': '最小值'}, {'name': 'max', 'type': 'Number', 'default': '', 'description': '最大值'}, {'name': 'step', 'type': 'Number', 'default': '1', 'description': '每次增长步数'}, {'name': 'value', 'type': 'Number', 'default': '0', 'description': '默认值'}, {'name': 'name', 'type': 'String', 'default': '', 'description': 'input框name属性'}, {'name': 'title', 'type': 'String', 'default': '', 'description': '题目'}, {'name': 'fillable', 'type': 'Boolean', 'default': 'true', 'description': 'input框是否可聚焦，手动修改数字'}, {'name': 'width', 'type': 'String', 'default': '50px', 'description': 'input框宽度'}, {'name': 'height', 'type': 'String', 'default': '30px', 'description': 'input框高度'}, {'name': 'fontSize', 'type': 'String', 'default': '18px', 'description': '字体大小'}, {'name': 'activeColor', 'type': 'String', 'default': '#60c897', 'description': '激活颜色'}],
      emit: [{'name': 'on-change', 'description': 'number值改变时,传回该值'}]
    }
  },
  components: {
    NumberDefault,
    NumberInit,
    NumberNofocus,
    NumberNotitle,
    NumberResize,
    NumberStep
  },
  methods: {
  }
}
</script>
