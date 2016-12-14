<template>
  <bms-selector :options="list" value="gd" height="50px" fontSize="30px"></bms-selector>
</template>

<script>
module.exports = {
  data () {
    return {
      list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}]
    }
  }
}
</script>