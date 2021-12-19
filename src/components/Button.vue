<template>
  <div class="hello">
    <my-Button>默认按钮</my-Button>
    <my-Button type="primary">主要按钮</my-Button></my-Button>
    <my-Button type="success">成功按钮</my-Button>
    <my-Button type="info">信息按钮</my-Button>
    <my-Button type="warning">警告按钮</my-Button>
    <my-Button type="danger">危险按钮</my-Button>
  </div>
</template>

<script  >
export default {
  name: 'button',
  created(){

  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>

</style>
