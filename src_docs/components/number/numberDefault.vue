<template>
  <bms-number title="选择数量" name="number"  @on-change="onChange"></bms-number>
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