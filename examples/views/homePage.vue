<template>
<div class="container">
    <div class="headView">
      <topSiderBar/>
    </div>
    <div class="mainView">
    </div>
</div>
</template>

<script>
import topSiderBar from './top-bar'
export default {
  components:{
    topSiderBar
  },
  data() {
        return {

        }
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
.headView {
    height: 80px;
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    position: relative;
}

.mainView {
    padding: 0;
    margin-top: 0;
    height: 100%;
    min-height: auto;
}
</style>
