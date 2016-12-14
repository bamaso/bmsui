<template>
  <div>
    <bms-scroller :lists="lists" :height="30" :timeout="4"></bms-scroller>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      lists: [{
        title: '期中考后家长必做3件事，不然白考了！家长必看',
        link: {
          type: 'vue-router',
          props: {
            name: 'button',
            tag: 'a'
          }
        }
      },
      {
        title: '快乐挖红薯、烤地瓜，品尝秋天味道',
        link: {
          type: 'a',
          props: {
            path: 'http://www.bamasoso.com'
          }
        }
      },
      {
        title: '想让孩子主动学习 石家庄一幼儿园引进国际教育课程',
        link: {
          type: 'a',
          props: {
            path: 'http://www.bamasoso.com'
          }
        }
      },
      {
        title: '如果你的孩子在小学，不可错过这6件事！',
        link: {
          type: 'a',
          props: {
            path: 'http://www.bamasoso.com'
          }
        }
      },
      {
        title: '试卷这样分析，成绩才会越来越好 ， 强烈建议！',
        link: {
          type: 'a',
          props: {
            path: 'http://www.bamasoso.com'
          }
        }
      },
      {
        title: '比房价更疯狂的，是北京海淀、朝阳的教育',
        link: {
          type: 'a',
          props: {
            path: 'http://www.bamasoso.com'
          }
        }
      }
      ]
    }
  }
}
</script>