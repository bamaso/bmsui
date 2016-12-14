<template>
  <div>
    <bms-selector :options="list" value="gd" theme="danger"></bms-selector><br>
    <bms-selector :options="list" value="gd" theme="warning"></bms-selector><br>
    <bms-selector :options="list" value="gd" theme="success"></bms-selector><br>
    <bms-selector :options="list" value="gd" theme="primary"></bms-selector><br>
    <bms-selector :options="list" value="gd"></bms-selector>
  </div>
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