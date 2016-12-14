<template>
  <tab fontSize="10px" height="25px" activeColor="red">
    <tab-item activeClass="a" @on-item-click="onSelect">已发货</tab-item>
    <tab-item activeClass="b" @on-item-click="onSelect">未发货</tab-item>
    <tab-item activeClass="c" @on-item-click="onSelect">全部订单</tab-item>
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