<template>
  <bms-rater @on-change="onChange" :value="2.5" disabled></bms-rater>
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
