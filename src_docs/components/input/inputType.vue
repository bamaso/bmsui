<template>
  <bms-input title="传入type类型(number)" type="number" @on-change="onChange"></bms-input>
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