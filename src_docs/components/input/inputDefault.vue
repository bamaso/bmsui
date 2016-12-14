<template>
  <bms-input title="普通input" placeholder="普通文本" @on-change="onChange"></bms-input>
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