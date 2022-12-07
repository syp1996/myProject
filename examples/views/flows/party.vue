<template>
  <div class="container_com">
    <div
      v-for="(item,index) in cardOptions"
      :key="index"
      class="card_box"
      >
        <Card
          type="party"
          :itemData="item"
        />
    </div>
  </div>
</template>

<script>
import Card from "@/views/components/card.vue";
export default {
  components: {
    Card
  },
  data() {
    return {
      type: 'common',
      cardOptions: [
        {
          title: '报账用户安抚'
        },
        {
          title: '市场营业厅建设监督'
        },
        {
          title: '党建经费报账审批'
        },
        {
          title: '党建经费报账审批'
        },
        {
          title: '公司通知'
        },
        {
          title: '报账用户安抚'
        },
        {
          title: '市场营业厅建设监督'
        },
        {
          title: '党建经费报账审批'
        },
        {
          title: '党建经费报账审批'
        },
        {
          title: '公司通知'
        },
      ]
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.container_com {
  width: 100%;
  margin: 24px 0 0 32px;
  // height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  .card_box{
    transition: all 0.5s;
    width: 270px;
    height: 100px;
    margin-right: 55px;
    margin-bottom: 24px;
    animation-name: move;
    animation-duration: 2s;
  }

  @keyframes move {
    0% {
        transform: translate(0,120px);
    }
    100% {
        transform: translate(0,0px);
    }
  }
  .card_box:hover {
    opacity: 1; //透明度
    transition: 0.4s; //动画过渡的更加顺滑
    transform: scale(1.1); //放大倍数
  }
}
</style>
