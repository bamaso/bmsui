<template>
  <div>
    <bms-emoji @add-img="add"></bms-emoji>
  </div>
</template>

<script>
module.exports = {
  methods: {
    add (val) {
      console.log(val)
    }
  }
}
</script>
