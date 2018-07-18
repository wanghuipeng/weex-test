<template>
  <list>
    <header>
      <text class="banner" @click="jump">图书</text>
    </header>
    <cell v-for="(item,index) in lists" :key="index">
      <div class="panel" @click="jump">
        <text class="text" v-show="item.title !== ''">{{item.title}}</text>
      </div>
    </cell>
  </list>
</template>

<script>
const stream = weex.requireModule('stream')
// only for weex online playground (dotwe.org)

export default {
  data () {
    return {
      lists: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    // 数据加载
    fetchData () {
      stream.fetch({
        method: 'GET',
        type: 'json',
        url: `https://api.douban.com/v2/book/search?q=''`
      }, res => {
        if (res.ok) {
          this.lists = res.data.books
        } else {
          this.count = '- unknown -'
        }
      })
    }

  }
}
</script>

<style scoped>
  .banner {
    width: 750px;
    font-size: 40px;
    padding: 20px 0;
    text-align: center;
    color: #fff;
    background-color: rgb(162, 217, 192);
  }
  .panel {
    width: 720px;
    margin-left: 30px;
    flex-direction: column;
    justify-content: center;
    border-width: 1px;
    border-style: solid;
    border-color: #eee;
  }
  .text {
    height: 80px;
    line-height: 80px;
    font-size: 36px;
    text-align: left;
    color: #333;
    margin-top: 10px;
  }
</style>
