<template>
  <div
    class="box"
    @dragstart="handleDragStart($event)"
    @dragover.prevent="handleDragOver($event)"
    @dragenter.prevent="handleDragEnter($event)"
    @dragend="handleDragEnd($event)"
    @drop='onDrop($event, 1)'
    draggable="true"
  >
    <div class="up">
      <div class="title">数据统计</div>
      <div class="tip">
        <div>数据每5分钟更新</div>
        <div>更新时间：2022-12-01</div>
      </div>
    </div>
    <div class="data">
      <div class="data_a">
        <div
          v-for="(item,index) in dataOptions"
          :key="index"
          class="item"
        >
          <div>{{ item.name}}</div>
          <div>{{ item.num}}</div>
          <div class="compare">
            <div v-if="item.flag == 0">较昨日下降：{{item.compare}}</div>
            <div v-else>较昨日上升：{{item.compare}}</div>
            <div :class="item.flag == 0? 'icon_down':'icon_up'"></div>
          </div>
        </div>
      </div>
      <div class="data_b">
        <div
          v-for="(item,index) in options"
          :key="index"
          class="item"
        >
          <div>{{ item.name}}</div>
          <div>{{ item.num}}</div>
        </div>
      </div>

      <div class="data_c">
        <div
          v-for="(item,index) in options"
          :key="index"
          class="item"
        >
          <div>{{ item.name}}</div>
          <div>{{ item.num}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    //在拖动开始时执行，返回被拖动元素
    handleDragStart(e) {
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
    },
    //返回在何处放置被拖动的数据
    handleDragOver(e) {

    },
    //在被拖动的元素进入到放置目标时执行
    handleDragEnter(e) {
      e.dataTransfer.effectAllowed = 'move';
    },
    //皆指鼠标松开被拖动对象的事件，但是返回的分别为被拖动对象和被拖动元素悬挂的那个元素
    handleDragEnd(e) {

    }
  },
  data() {
    return {
      dataOptions: [
        {
          name: '已报工单数',
          num: '256',
          compare: '6',
          flag: 1,
        },
        {
          name: '已阅工单数',
          num: '645',
          compare: '3',
          flag: 0,
        },
        {
          name: '待办工单数',
          num: '421',
          compare: '4',
          flag: 0,
        },
        {
          name: '已阅工单数',
          num: '256',
          compare: '6',
          flag: 1,
        }
      ],
      options: [
        {
          name: '待办',
          num: '256',
          compare: '6',
          flag: 1,
        },
        {
          name: '已办',
          num: '645',
          compare: '3',
          flag: 0,
        },
        {
          name: '已阅',
          num: '421',
          compare: '4',
          flag: 0,
        },
        {
          name: '已办',
          num: '421',
          compare: '4',
          flag: 0,
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 1309px;
  height: 205px;
  background-color: #ffff;
  border-radius: 8px;
  margin: 24px;

  .compare {
    display: flex;
    flex-direction: row;
    align-items: center;

    div:nth-child(1) {
      font-size: 13px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: rgba(0,0,0,0.30);
      line-height: 18px;
    }
  }

  .icon_down {
    width: 12px;
    height: 12px;
    background-image: url('~@/assets/down.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 4px;
  }

  .icon_up {
    width: 12px;
    height: 12px;
    background-image: url('~@/assets/up.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 4px;
  }

  .data {
    display: flex;
    flex-direction: row;
    .data_a{
      width: 580px;
      margin: 24px 0 0 24px;
      border-right: 1px solid rgba(0,0,0,0.05);
      .item {
        float: left;
        text-align: left;
        margin-right: 24px;
        div:nth-child(1) {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: rgba(0,0,0,0.45);
          line-height: 20px;
          margin-top:2px;
          margin-bottom:6px;
        }
        div:nth-child(2) {
          font-size: 24px;
          font-family: BebasNeue, BebasNeue-Regular;
          font-weight: 400;
          text-align: left;
          color: rgba(0,0,0,0.75);
          line-height: 24px;
        }
      }
    }

    .data_b{
      width: 300px;
      margin: 24px 0 0 56px;
      .item {
        float: left;
        text-align: left;
        width: 40px;
        margin-right: 32px;
        div:nth-child(1) {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: rgba(0,0,0,0.45);
          line-height: 20px;
          margin-top:2px;
          margin-bottom:6px;
        }
        div:nth-child(2) {
          font-size: 24px;
          font-family: BebasNeue, BebasNeue-Regular;
          font-weight: 400;
          text-align: left;
          color: rgba(0,0,0,0.75);
          line-height: 24px;
        }
      }
    }

    .data_c{
      width: 300px;
      margin: 24px 0 0 80px;
      .item {
        float: left;
        text-align: left;
        margin-right: 32px;
        width: 40px;
        div:nth-child(1) {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: rgba(0,0,0,0.45);
          line-height: 20px;
          margin-top:2px;
          margin-bottom:6px;
        }
        div:nth-child(2) {
          font-size: 24px;
          font-family: BebasNeue, BebasNeue-Regular;
          font-weight: 400;
          text-align: left;
          color: rgba(0,0,0,0.75);
          line-height: 24px;
        }
      }
    }
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
}
</style>
