<template>
  <bms-number title="步数为5" @on-change="onChange" :step="5"></bms-number>
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