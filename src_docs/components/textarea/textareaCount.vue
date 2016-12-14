<template>
  <bms-textarea :max="1000" placeholder="请填写详细信息"></bms-textarea>
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