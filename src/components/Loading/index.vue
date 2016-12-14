<template>
<div class="bms-loading">
    <div class="loading" v-if="type==='bms'">
      <div class="img"></div>
      <div class="eyes1"></div>
      <div class="eyes2"></div>
      <div class="circle"></div>
      <div class="round"></div>
    </div>
    <div v-if="type==='normal'" class="loader">
      <div class="inner">
        <div class="loading_leaf loading_leaf_0"></div>
        <div class="loading_leaf loading_leaf_1"></div>
        <div class="loading_leaf loading_leaf_2"></div>
        <div class="loading_leaf loading_leaf_3"></div>
        <div class="loading_leaf loading_leaf_4"></div>
        <div class="loading_leaf loading_leaf_5"></div>
        <div class="loading_leaf loading_leaf_6"></div>
        <div class="loading_leaf loading_leaf_7"></div>
        <div class="loading_leaf loading_leaf_8"></div>
        <div class="loading_leaf loading_leaf_9"></div>
        <div class="loading_leaf loading_leaf_10"></div>
        <div class="loading_leaf loading_leaf_11"></div>
      </div>
    </div>
    <div class="loading-words">
      {{title}}<span><i>....</i></span>
    </div>
</div>
</template>

<script>
module.exports = {
  name: 'BmsLoading',
  props: {
    title: {
      type: String,
      default: '拼命加载中'
    },
    type: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
