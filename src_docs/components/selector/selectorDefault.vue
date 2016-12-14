<template>
  <bms-selector :options="list" title="省份" @on-change="onChange"></bms-selector>
</template>

<script>
module.exports = {
  data () {
    return {
      list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}]
    }
  },
  methods: {
    onChange (val) {
      console.log(val)
    }
  }
}
</script>