<template>
  <bms-rater @on-change="onChange"></bms-rater>
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
