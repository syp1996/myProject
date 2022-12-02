<template>
  <div class="box">
    <!-- 左侧拖拽组件 -->
    <div class="drap">
      <!--
            @dragstart  < -- 是元素开始拖拽的时候触发
            draggable="true"  < -- 为了使元素可拖动，把 draggable 属性设置为 true ：
            @dragover.prevent < -- 阻止浏览器默认行为，不然会显示一个叉叉，不好看, 加上会显示一个添加的符号
         -->
      <div
        v-for="(item, index) in drapLeftElList"
        class="drap-item"
        :key="index"
        @dragstart="handleDrapEvList($event, item)"
        @dragover.prevent
        draggable="true"
      >
        <img
          class="drap-item-img"
          draggable="false"
          :src="item.imgUrl"
          :alt="item.name"
        />
        <div class="drap-item-name">{{ item.name }}</div>
      </div>
    </div>
    <!-- 主体部分 -->
    <div class="drap-container" @dragover.prevent @drop="handleDrap">
        <!-- @mousedown.stop="handleMouseDown($event, item, index)"
        @mouseup.stop="handleMouseUp" -->
      <div
        v-for="(item, index) in componentsList"
        class="drap-container-item"
        :key="index"
        :style="{ top: `${item.position.y}px`, left: `${item.position.x}px` }"
        @click="handleClick(item, index)"
      >
        <img class="drap-item-img" :src="item.imgUrl" :alt="item.name" />
        <div class="drap-item-name">{{ item.name }}</div>
      </div>
    </div>
    <!-- 属性配置 -->
    <div class="drap-right" style="width: 300px">
      属性配置
      {{ identifier }}
      {{ curControl }}
    </div>
  </div>
</template>

<script>
export default {
  name: "drap",
  data() {
    return {
      // 保存拖拽的元素的列表
      componentsList: [],
      //   元件库
      drapLeftElList: [
        {
          id: 11,
          name: "团队1",
          imgUrl:
            "4e4ab580ac7549bfb0b7b46db57b3bb4.png",
          sort: 1,
          position: {
            x: 0,
            y: 0,
          },
        },
        {
          id: 13,
          name: "团队2",
          imgUrl:
            "4e4ab580ac7549bfb0b7b46db57b3bb4.png",
          sort: 2,
          position: {
            x: 0,
            y: 0,
          },
        },
        {
          id: 14,
          name: "团队3",
          imgUrl:
            "4e4ab580ac7549bfb0b7b46db57b3bb4.png",
          sort: 3,
          position: {
            x: 0,
            y: 0,
          },
        },
        {
          id: 15,
          name: "团队4",
          imgUrl:
            "4e4ab580ac7549bfb0b7b46db57b3bb4.png",
          sort: 3,
          position: {
            x: 0,
            y: 0,
          },
        },
      ],
      identifier: "", // 当前项的 唯一标识
      curControl: null, // 当前点击的是哪个组件
    };
  },
  methods: {
    handleDrapEvList(event, value) {
      let { offsetX, offsetY } = event;
      var infoJson = JSON.stringify({
        ...value,
        position: {
          ...value.position,
          x: offsetX,
          y: offsetY,
        },
      });
      //   将数据绑定到dataTransfer身上
      event.dataTransfer.setData("drapData", infoJson);
    },
    // 监听拖拽元素结束
    handleDrap(event) {
      event.preventDefault();
      const value = event.dataTransfer.getData("drapData");
      //   获取绑定到拖拽元素身上的 drapData属性
      if (value) {
        let drapData = JSON.parse(value);
        // 获取指定鼠标在拖拽组件身上点击的位置

        const { position } = drapData;
        const identifier = Math.floor(Math.random() * 10000);
        // 获取当前鼠标拖拽结束的位置
        const {offsetX, offsetY} = event
        this.componentsList.push({
          ...drapData,
          identifier,
          position: {
            ...position,
 // 用鼠标拖拽结束的位置减去鼠标在元素上点击的位置, 就得到拖拽元素放置的当前位置
            x: offsetX - position.x,
            y: offsetY - position.y,
          },
        });
      }
    },
    // 点击元素获取组件配置
    handleClick(row, index) {
      this.identifier = row.identifier;
      this.curControl = row;
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 500px;
  overflow: hidden;
  .drap {
    width: 300px;
    height: 500px;
    background: #f2f2f2;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    cursor: pointer;
    .drap-item {
      height: 120px;
      margin-right: 20px;
      .drap-item-img {
        display: block;
        width: 80px;
        height: 80px;
      }
      .drap-item-name {
        text-align: center;
      }
    }
  }
  .drap-container {
    flex: 1;
    height: 500px;
    background: #ccc;
    position: relative;
    .drap-container-item {
      -webkit-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;
      position: absolute;
      user-select: none;
      .drap-item-img {
        display: block;
        width: 80px;
        height: 80px;
      }
      .drap-item-name {
        text-align: center;
      }
    }
  }
}
</style>
