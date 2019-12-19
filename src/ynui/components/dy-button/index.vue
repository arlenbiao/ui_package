<template>
    <div>
        <button @click="click">{{value}}</button>
    </div>
</template>
<script>
export default {
  name: 'dy-button',
  props: {
    value: {
      type: [String, Number],
      default: '按钮'
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="less" scoped>

</style>
