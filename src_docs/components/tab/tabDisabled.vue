<template>
  <tab>
    <tab-item disabled @on-item-click="onSelect">已发货</tab-item>
    <tab-item disabled @on-item-click="onSelect">未发货</tab-item>
    <tab-item disabled @on-item-click="onSelect">全部订单</tab-item>
  </tab>
</template>

<script>
export default {
  methods: {
    onSelect (text) {
      console.log(text)
    }
  }
}
</script>