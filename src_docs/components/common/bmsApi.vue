<template>
<div class="bmsui-api">
  <h3>Api</h3>
  <table class="bmsui-table">
    <thead>
      <tr>
        <th width="20%">Name</th>
        <th width="15%">Type</th>
        <th width="25%">Default-Value</th>
        <th width="40%">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr, index) in api">
      <td v-for="(td, index) in tr">
        {{td}}
      </td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  props: {
    api: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style>
.bmsui-api{
 overflow-x: auto; 
}
.bmsui-api .bmsui-table{
  min-width: 700px;
}
.bmsui-api .bmsui-table th,.bmsui-api .bmsui-table td{
  text-align: left;
  height:30px;
  border-bottom: 1px solid #eee;
}
</style>
