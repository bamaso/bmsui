<template>
  <div>
    <bms-radio :options="list" theme="default"></bms-radio><br>
    <bms-radio :options="list1" theme="danger"></bms-radio><br>
    <bms-radio :options="list2" theme="warning"></bms-radio><br>
    <bms-radio :options="list3" theme="success"></bms-radio><br>
    <bms-radio :options="list4" theme="primary"></bms-radio><br>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
      list1: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
      list2: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
      list3: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
      list4: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}]
    }
  }
}
</script>