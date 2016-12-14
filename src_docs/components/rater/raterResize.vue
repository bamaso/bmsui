<template>
  <bms-rater @on-change="onChange" :fontSize="12" activeColor="red" :value="2.5"></bms-rater>
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
