<template>
  <bms-input title="改变高度" height="20px"  @on-change="onChange"></bms-input>
</template>

<script>
module.exports = {
  methods: {
    onChange (val) {
      console.log(val)
    }
  }
}
</script>