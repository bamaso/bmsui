<template>
<div class="bms-code">
  <div class="header" @click="toggle">
    <span>{{title}}</span>
    <span>></span>
  </div>
  <transition name="code">
    <mark-down :text="text" v-if="open" class="code-mark-down"/>
  </transition> 
  <div class="code-content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import markDown from './markDown'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    text () {
      return `\`\`\`html
${this.code}
             \`\`\``
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  },
  components: {
    markDown
  }
}
</script>
<style>
  .bms-code{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border:1px solid #dfdfdf;
  }
  .bms-code .header{
    height:40px;
    line-height: 40px;
    padding:0 15px;
    background-color: #dfdfdf;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .bms-code .header span:last-child{
    float:right;
  }
  .code-content{
    padding:15px;
  }
  .code-mark-down{
    overflow-x: scroll;
    overflow-y: auto;
    background-color: #f7f7f7;
  }
  /**过渡**/
  .code-leave-active,.code-enter-active{
    max-height: 1400px;
    -webkit-transition: max-height .8s cubic-bezier(.445,.05,.55,.95);
    transition: max-height .8s cubic-bezier(.445,.05,.55,.95);
    transition-property: max-height;
    transition-duration: 0.8s;
    transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition-delay: initial;
    display: block;
  }
  .code-enter{
    max-height:0;
  }
  .code-leave-active{
    max-height:0;
  }

</style>