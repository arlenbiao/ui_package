<template>
  <div>
    <dy-button/>
    <dy-wechatLogin appid="44545" redirectTo="https%3a%2f%2freport.smartracing.cn%2f%23%2fWechatLogin"></dy-wechatLogin>
    <div style="border-radius: 12px;overflow: hidden;">
      <dy-address v-for="(item, index) in list" :key="index" :index="index" @delete="deleteFun"></dy-address>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      list: [1, 1, 1]
    }
  },
  methods: {
    deleteFun (index) {
      this.list.splice()
      console.log('====================================')
      console.log('点了第几个' + index)
      console.log('====================================')
    }
  }
}
</script>
<style>

</style>
