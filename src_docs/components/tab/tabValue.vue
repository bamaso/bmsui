<template>
  <tab :first_active="2">
    <tab-item @on-item-click="onSelect">已发货</tab-item>
    <tab-item @on-item-click="onSelect">未发货</tab-item>
    <tab-item @on-item-click="onSelect">全部订单</tab-item>
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