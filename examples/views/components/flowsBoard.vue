<template>
  <div class="container">
    <div class="tap">
      <div
        :class="tapFlag == index?'tap_item_selected':'tap_item'"
        v-for="(item,index) in tapOptions"
        :key="item.index"
        @click="handleTap(index,item.value)"
      >
        {{item.name}}
      </div>
    </div>
    <div class="tap_show">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    // tapFlag:{
    //   handler(oldval,newval) {
    //     console.log('oldval',oldval,newval)
    //   }
    // }
  },
  computed: {
  },
  mounted() {
    this.handleRouter(this.tapFlag)
  },
  methods: {
    handleRouter(value) {
      switch(value) {
        case 0: this.$router.replace('/common').catch(err => {});
        break;
        case 1: this.$router.replace('/province').catch(err => {});
        break;
        case 2: this.$router.replace('/office').catch(err => {});
        break;
        case 3: this.$router.replace('/finance').catch(err => {});
        break;
        case 4: this.$router.replace('/hr').catch(err => {});
        break;
        case 5: this.$router.replace('/party').catch(err => {});
        break;
        case 6: this.$router.replace('/gh').catch(err => {});
        break;
        case 7: this.$router.replace('/sc').catch(err => {});
        break;
        case 8: this.$router.replace('/wl').catch(err => {});
        break;
        case 9: this.$router.replace('/xf').catch(err => {});
        break;
        case 10: this.$router.replace('/other').catch(err => {});
        break;
      }
    },
    handleTap(index,value) {
      this.tapFlag = value;
      this.handleRouter(this.tapFlag);
    }
  },
  data() {
    return {
      tapFlag: 0,
      tapOptions: [
        {
          name: '常用',
          value: 0
        },
        {
          name: '省分',
          value: 1
        },
        {
          name: '办公',
          value: 2
        },
        {
          name: '财务',
          value: 3
        },
        {
          name: '人力',
          value: 4
        },
        {
          name: '党群',
          value: 5
        },
        {
          name: '工会',
          value: 6
        },
        {
          name: '市场',
          value: 7
        },
        {
          name: '网络',
          value: 8
        },
        {
          name: '县分',
          value: 9
        },
        {
          name: '其他',
          value: 10
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 1309px;
  height: 709px;
  background-color: #ffff;
  border-radius: 8px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;

  .tap_show {
    width: 100%;
    height: 660px;
  }

  .tap {
    width: 100%;
    height: 44px;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    display: flex;
    flex-direction: row;
    align-items: center;

    div:hover{
      color: #3c7bfd;
      cursor:pointer;
    }

    .tap_item_selected {
      width: 99px;
      height: 44px;
      font-size: 18px;
      font-family: PingFang SC, PingFang SC-6;
      font-weight: 500;
      text-align: center;
      color: #3c7bfd;
      line-height: 44px;
      cursor:pointer;
    }
    .tap_item {
      width: 99px;
      height: 44px;
      font-size: 18px;
      font-family: PingFang SC, PingFang SC-6;
      font-weight: 500;
      text-align: center;
      color: rgba(0,0,0,0.75);
      line-height: 44px;
      cursor:pointer;
    }
  }
}
</style>
