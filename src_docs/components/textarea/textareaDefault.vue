<template>
  <bms-textarea placeholder="请填写详细信息" @on-change="onChange"></bms-textarea>
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