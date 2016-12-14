<template>
  <bms-number width="100px" height="50px" fontSize="25px" title="选择数量" activeColor="red"></bms-number>
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