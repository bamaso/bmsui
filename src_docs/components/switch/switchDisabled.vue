<template>
  <div>
    <bms-switch status="open" type="default" @on-change="onChange" disabled></bms-switch>
    <bms-switch status="open" type="primary" @on-change="onChange" disabled></bms-switch>
    <bms-switch status="close" type="warning" @on-change="onChange" disabled></bms-switch>
    <bms-switch status="open" type="success" @on-change="onChange" disabled></bms-switch>
    <bms-switch status="close" type="danger" @on-change="onChange" disabled></bms-switch>
  </div>
</template>
<script>
module.exports = {
  methods: {
    onChange (newVal) {
      console.log(' ' + newVal)
    }
  }
}
</script>
