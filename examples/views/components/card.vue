<template>
  <div
    class="container_card"
  >
    <div class="text">{{itemData.title}}</div>
    <img class="bg" :src="`${value}`"/>
    <div class="btn">
      <div>办理指南</div>
      <div>在线办理</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    type:{ type: String, default: "common" },
    itemData: {type: Object}
  },
  data() {
    return {
      value: require('@/assets/flows/card_com.png'),
    }
  },
  created() {
    // console.log('newval',this.type)
  },
  watch: {
    type:{
      handler(oldval,newval) {
        if(oldval) {
          switch(oldval) {
            case 'common': this.value = require('@/assets/flows/card_com.png');
            break;
            case 'province': this.value = require('@/assets/flows/card_province.png');
            break;
            case 'office': this.value = require('@/assets/flows/card_office.png');
            break;
            case 'finance': this.value = require('@/assets/flows/card_finance.png');
            break;
            case 'hr': this.value = require('@/assets/flows/card_hr.png');
            break;
            case 'party': this.value = require('@/assets/flows/card_party.png');
            break;
            case 'gh': this.value = require('@/assets/flows/card_gh.png');
            break;
            case 'sc': this.value = require('@/assets/flows/card_sc.png');
            break;
            case 'wl': this.value = require('@/assets/flows/card_wl.png');
            break;
            case 'xf': this.value = require('@/assets/flows/card_xf.png');
            break;
            case 'other': this.value = require('@/assets/flows/card_other.png');
            break;
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.container_card {
  width: 270px;
  height: 100px;
  position: absolute;
  border-radius: 1px;
  box-shadow: 0px 0px 8px 1px rgba(60,123,253,0.10);
  z-index: 0;

  .btn {
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 20;
    bottom: 12px;
    right: 24px;

    div:nth-child(1):hover,div:nth-child(2):hover {
      cursor: pointer;
    }
    div:nth-child(1) {
      width: 66px;
      height: 20px;
      border: 1px solid rgba(0,0,0,0.25);
      border-radius: 14px;
      font-size: 12px;
      font-family: PingFang SC, PingFang SC-5;
      font-weight: 400;
      text-align: center;
      color: rgba(0,0,0,0.25);
      line-height: 20px;
    }

    div:nth-child(2) {
      margin-left:8px;
      width: 66px;
      height: 20px;
      background: #1193ff;
      border-radius: 14px;
      font-size: 12px;
      font-family: PingFang SC, PingFang SC-5;
      font-weight: 400;
      text-align: center;
      color: #ffffff;
      line-height: 20px;
    }
  }

  .text {
    font-size: 16px;
    font-family: PingFang SC, PingFang SC-6;
    font-weight: 500;
    text-align: left;
    color: rgba(0,0,0,0.75);
    line-height: 22px;
    position: absolute;
    z-index: 12;
    top: 14px;
    left: 24px
  }

  .bg {
    width: 270px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

}
</style>
