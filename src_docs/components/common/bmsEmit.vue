<template>
<div class="bmsui-emit">
  <h3>Emit触发事件 <span>!需在父组件中触发该事件,见实例一!</span></h3>
  <table class="bmsui-table">
    <thead>
      <tr>
        <th width="25%">EmitName</th>
        <th width="75%">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr, index) in emit">
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
    emit: {
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
.bmsui-emit{
 overflow-x: auto; 
}
.bmsui-emit .bmsui-table{
  min-width: 500px;
}
.bmsui-emit h3 span{
  color:red;
  font-size: 10px;
}
.bmsui-emit .bmsui-table th,.bmsui-emit .bmsui-table td{
  text-align: left;
  height:30px;
  border-bottom: 1px solid #eee;
}
</style>
