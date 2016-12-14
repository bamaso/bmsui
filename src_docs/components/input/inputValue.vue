<template>
  <bms-input title="传入默认值" value="默认值" @on-change="onChange"></bms-input>
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