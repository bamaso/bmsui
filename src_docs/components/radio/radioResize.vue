<template>
  <bms-radio value="gd" :options="list" @on-change="onChange" :border="false" height="60px"></bms-radio>
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