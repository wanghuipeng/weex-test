<template>
  <div style="justify-content:center">
    <text class="label">Vue.js Star Counts</text>
    <text class="count">{{count}}</text>
  </div>
</template>

<script>
const stream = weex.requireModule('stream')
export default {
  data () {
    return {
      count: 'fetching...'
    }
  },
  created () {
    stream.fetch({
      method: 'GET',
      type: 'json',
      url: 'https://api.douban.com/v2/book/4866934'
    }, res => {
      if (res.ok) {
        this.count = res.data.author
      } else {
        this.count = '- unknown -'
      }
    })
  }
}
</script>

<style scoped>
  .label {
    color: #666;
    text-align: center;
    font-size: 60px;
  }
  .count {
    color: #41B883;
    text-align: center;
    font-size: 100px;
    margin-top: 80px;
    margin-bottom: 100px;
  }
</style>
