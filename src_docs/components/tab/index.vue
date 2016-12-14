<template>
  <div>
    <mark-down :text="text"></mark-down>
    <bms-code title="普通tab" :code="default1">
      <tab-default />
    </bms-code>
    <br>
    <bms-code title="禁止点击的tab" :code="disabled">
      <tab-disabled />
    </bms-code>
    <br>
    <bms-code title="修改默认外观" :code="resize">
      <tab-resize />
    </bms-code>
    <br>
    <bms-code title="传入默认被选中的对象" :code="value">
      <tab-value />
    </bms-code>
    <br>
    <bms-emit :emit="emit"></bms-emit>
    <br>
    <bms-api :api="api"></bms-api> 
  </div>
</template>
<script>
import TabDefault from './TabDefault'
import TabDefaultCode from '!raw!./TabDefault'
import TabDisabled from './TabDisabled'
import TabDisabledCode from '!raw!./TabDisabled'
import TabResize from './TabResize'
import TabResizeCode from '!raw!./TabResize'
import TabValue from './tabValue'
import TabValueCode from '!raw!./tabValue'
import description from './README.md'
export default {
  data () {
    return {
      default1: TabDefaultCode,
      disabled: TabDisabledCode,
      resize: TabResizeCode,
      value: TabValueCode,
      text: description,
      api: [{'name': 'activeColor', 'type': 'String', 'default': '#04be02', 'description': '激活颜色'}, {'name': 'defaultColor', 'type': 'String', 'default': '#333', 'description': '默认字体颜色'}, {'name': 'disabledColor', 'type': 'String', 'default': '#ddd', 'description': '禁用状态下字体颜色'}, {'name': 'height', 'type': 'String', 'default': '44px', 'description': '高度'}, {'name': 'first_active', 'type': 'Number', 'default': '0', 'description': '被选中的item，默认为第0个'}, {'name': 'fontSize', 'type': 'String', 'default': '14px', 'description': '字号'}, {'name': 'activeClass', 'type': 'String', 'default': '', 'description': '注意：该参数传给tab-item组件。表示为被激活的item添加的class类名，详见示例1'}, {'name': 'disabled', 'type': 'Boolean', 'default': '', 'description': '注意：该参数传给tab-item组件。表示是否被禁用'}],
      emit: [{'name': 'on-item-click', 'description': '注意：该事件为tab-item的事件。以传回当前被选中项的内容，详见示例一'}]
    }
  },
  components: {
    TabDefault,
    TabDisabled,
    TabResize,
    TabValue
  },
  methods: {
  }
}
</script>
