<template>
  <div class="mark-down" v-html="marked(text)"/>
</template>

<script>
import marked from 'marked'
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  created () {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight (code, lang) {
        return require('highlight.js').highlight(lang, code).value
      }
    })
  },
  methods: {
    marked (text) {
      return marked(text)
    }
  }
}
</script>
<style>
  .mark-down h2{
    height:50px;
    line-height: 50px;
    margin: 0;
    border-bottom: 1px solid #eee;
  }
</style>
