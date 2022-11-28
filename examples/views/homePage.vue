<template>
<div id="container">
  <div class="up_siderBar">
    <div class="logo_Area"></div>
    <ul
      ref="sideBar"
      class="nav"
      @click="getUlIndex()"
    >
      <!-- <li
        v-for="(item,index) in barList"
        :key="index"
        :class="active?'active':'unactive'"
      >
        {{item.name}}
      </li> -->
      <li>
        <a :class="active?'active':'unactive'">首页</a>
      </li>
      <li>
        <a :class="active?'active':'unactive'">公告</a>
      </li>
      <li>
        <a :class="active?'active':'unactive'">流程管理</a>
      </li>
      <li>
        <a :class="active?'active':'unactive'">业务办理</a>
      </li>
      <li>
        <a :class="active?'active':'unactive'">任务管理</a>
      </li>
      <li>
        <a :class="active?'active':'unactive'">流程跟踪</a>
      </li>
      <li>
        <a :class="active?'active':'unactive'">系统管理</a>
      </li>
      <li>
        <a :class="active?'active':'unactive'">业务办理</a>
      </li>
      <li>
        <a :class="active?'active':'unactive'">系统工具</a>
      </li>
    </ul>
    <div class="handle_Area">
      <div class="icon1">
        <div></div>
        <div>操作手册</div>
      </div>
      <div class="icon1">
        <div></div>
        <div>操作手册</div>
      </div>
      <div class="icon1">
        <div></div>
        <div>操作手册</div>
      </div>
    </div>
    <div class="person_Area">
      <div></div>
      <div>Hi,YUNPENG SHI!</div>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery';
import topBar from "./top-bar.vue"
export default {
    components: {
        topBar
    },
    created() {

    },
    mounted() {
    },
    data() {
      return {
        active: false,
      }
    },
    methods: {
      handleClick(index) {
        console.log('ul', this.$refs.sideBar)
      },
      getUlIndex() {
        $("ul").on("click", "li", function () {
          var index = $(this).index();
          console.log('!!!',index)
        })
      }
    }

}
</script>

<style lang="scss" scoped>
#container {
  width: 1920px;
  height: 1080px;

  .person_Area{
      height: 60px;
      width: 194px;
      display: flex;
      flex-direction: row;
      align-items: center;
      div:nth-child(1){
        width: 32px;
        height: 32px;
        background-image:url('../assets/pic.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-right: 12px;
      }
    }

  .handle_Area {
    width: 511px;
    height: 60px;
    display: flex;
    flex-direction: row;

    .icon1{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 12px;
      div:nth-child(1) {
        width: 16px;
        height: 16px;
        background-image:url('../assets/icon1.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-right: 4px;
      }
    }
  }
  .logo_Area {
    width: 200px;
    height: 60px;
  }
  .up_siderBar {
    height: 60px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;

    ul {
      /* 清除ul标签的默认样式 */
      width: auto;
      /*宽度也改为自动*/
      list-style-type: none;
      white-space: nowrap;
      overflow: hidden;
      margin-left: 5%;
      /* margin-top: 0;          */
      padding: 0;
    }
    .nav {
      // height: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      // padding-top: 20px;
      float: right;

      li {
        float: left;
        margin-right: 50px;
        line-height: 60px;
            /* 两个li之间的距离*/
        position: relative;
        .unactive {
          background-color: #ffffff;
          height: 60px;
        }
      }

    }

    // li:hover{
    //   color: #FFFFFF;
    //   background-color: #3C7BFD;
    // }
  }


}
</style>
