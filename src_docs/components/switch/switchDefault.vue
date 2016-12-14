<template>
  <div>
    <bms-switch status="open" type="default" @on-change="onChange"></bms-switch>
    <bms-switch status="open" type="primary" @on-change="onChange"></bms-switch>
    <bms-switch status="close" type="warning" @on-change="onChange"></bms-switch>
    <bms-switch status="open" type="success" @on-change="onChange"></bms-switch>
    <bms-switch status="close" type="danger" @on-change="onChange"></bms-switch>
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
