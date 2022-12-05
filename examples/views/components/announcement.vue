<template>
  <div class="box">
    <div class="up">
      <div class="title">通知公告</div>
      <div class="more">
        <div>更多公告</div>
        <div></div>
    </div>
    </div>
    <div class="table-body">
      <vue-seamless-scroll
          :data="dataSource"
          :class-option="optionSetting"
          class="list"
        >
          <ul v-for="(item, index) in dataSource" :key="index">
            <li>
              <div class="table-row">
                <div class="upSection">
                  <div></div>
                  <div style="margin-left:8px">{{item.date}}</div>
                  <div style="margin-left:378px">{{item.time}}</div>
                </div>
                <div style="margin-left:32px">{{item.data}}</div>
              </div>
            </li>
          </ul>
        </vue-seamless-scroll>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    optionSetting() {
      return {
        step: 0.3, // 数值越大速度滚动越快
        limitMoveNum: 4, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 44, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        // singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        // waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  data() {
    return{
      dataSource: [
        {
          date: '12-2',
          data: '《关于上线施工证申请流程、动火证申请流程的通知》',
          time: '10:25:02'
        },
        {
          date: '12-2',
          data: '《关于上线施工证申请流程、动火证申请流程的通知》',
          time: '10:25:02'
        },
        {
          date: '12-2',
          data: '《关于上线施工证申请流程、动火证申请流程的通知》',
          time: '10:25:02'
        },
        {
          date: '12-2',
          data: '《关于上线施工证申请流程、动火证申请流程的通知》',
          time: '10:25:02'
        },
        {
          date: '12-2',
          data: '《关于上线施工证申请流程、动火证申请流程的通知》',
          time: '10:25:02'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  height: 250px
}
.table-row{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 44px;
  .upSection{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0px 8px 24px;
    div:nth-child(1) {
    width: 6px;
    height: 6px;
    background: #3c7bfd;
    border-radius: 50%;
  }
  }
}
ul li {
  list-style: none;
}

ul {
  margin: 0;
  padding-inline-start: 0;
}


.table-body {
    height: 236px;
    margin-top: 20px;
    overflow: hidden;
    background-image: url('~@/assets/an_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
.box {
  width: 539px;
  height: 353px;
  margin-top: 24px;
  background-color: #ffff;
  border-radius: 8px;
}

.up{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.05);

    .title {
      height: 24px;
      font-size: 18px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: rgba(0,0,0,0.75);
      line-height: 24px;
      margin: 24px 0 16px 24px;
    }

    .more {
      display: flex;
      flex-direction: row;
      align-items: center;
      div:nth-child(1) {
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: right;
        color: #3b9bff;
        line-height: 20px;
      }
      div:nth-child(2) {
        margin-right: 28px;
        background-image: url('~@/assets/more.png');
        height: 12px;
        width: 12px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    }

    .tip {
      div {
        text-align: right;
        margin-bottom: 4px;
      }
      display:float;
      float:right;
      margin: 24px 24px 0px 0px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: rgba(0,0,0,0.30);
      line-height: 12px;
      font-size: 12px;
    }
  }
</style>
