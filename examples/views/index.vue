/**
  这里是首页
*/
<template>
<div class="container">
  <div class="section_a">
    <Statistics @click="handleClick"></Statistics>
    <FlowsBoard></FlowsBoard>
  </div>
  <div class="section_b">
    <Announcement></Announcement>
  </div>
  <!-- <div
    class="test1"
    style="background:red;width:50px;height:50px"
    draggable="true"
    @dragstart="handleDragStart($event)"
    @dragover.prevent
  >
  哈哈
  </div>
  <div
    class="test2"
    style="background:blue;width:100px;height:100px"
    @dragenter.prevent="handleDragEnter($event)"
    @dragleave.prevent="handleDragLeave($event)"
    @dragover.prevent
    @drop='onDrop($event)'
  ></div> -->
</div>
</template>

<script>
import Statistics from '@/views/components/statistics.vue'
import Announcement from '@/views/components/announcement.vue'
import FlowsBoard from '@/views/components/flowsBoard.vue'
export default {
  components: {
    Statistics,
    Announcement,
    FlowsBoard
  },
  methods: {
    handleClick(){
      console.log('sdsdsd')
    },
    handleDragStart(e){
      console.log('e',e)
      let { offsetX, offsetY } = e;
      var infoJson = JSON.stringify({
        position: {
          x: offsetX,
          y: offsetY,
        },
      });
      e.dataTransfer.setData("drapData", infoJson);
      console.log('开始移动',infoJson)

    },
    handleDragEnter(e){
      console.log('在元素内')
      e.dataTransfer.dropEffect = 'copy'
    },
    handleDragLeave(e) {
      console.log('离开元素')
    },
    onDrop(e) {
      const value = e.dataTransfer.getData("drapData");
      let drapData = JSON.parse(value);
      const { position } = drapData;
      console.log('元素被放置',{ position })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  .section_a {
    display: flex;
    flex-direction: column;
  }
}
</style>
