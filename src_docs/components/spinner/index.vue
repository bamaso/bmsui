<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="spinner组件" :code="default1">
      <spinner-default />
    </bms-code>
    <br>
  </div>
</template>
<script>
import SpinnerDefault from './SpinnerDefault'
import SpinnerDefaultCode from '!raw!./SpinnerDefault'
import description from './README.md'
export default {
  data () {
    return {
      default1: SpinnerDefaultCode,
      text: description
    }
  },
  components: {
    SpinnerDefault
  },
  methods: {
  }
}
</script>
