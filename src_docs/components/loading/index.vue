<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="bms外观-loading" :code="default1">
      <loading-default />
    </bms-code>
    <br>
    <bms-code title="一般外观-loading" :code="bms">
      <loading-bms />
    </bms-code>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import LoadingDefault from './LoadingDefault'
import LoadingDefaultCode from '!raw!./LoadingDefault'
import LoadingBms from './LoadingBms'
import LoadingBmsCode from '!raw!./LoadingBms'
import description from './README.md'
export default {
  data () {
    return {
      default1: LoadingDefaultCode,
      bms: LoadingBmsCode,
      text: description,
      api: [{'name': 'title', 'type': 'String', 'default': '拼命加载中', 'description': '文字显示'}, {'name': 'type', 'type': 'String', 'default': 'normal', 'description': '显示类型(可选值为：bms、normal)'}]
    }
  },
  components: {
    LoadingDefault,
    LoadingBms
  },
  methods: {
  }
}
</script>
<style>
	.loading-wrap{
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.loading-item{
    width: 100%;
		height:400px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
</style>