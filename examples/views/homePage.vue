<template>
<div id="container">
  <div class="up_siderBar">
    <div class="logo_Area"></div>
    <ul
      ref="sideBar"
      class="nav"
    >
      <li>
        <div :class="active == 0?'active':'unactive'" @click="handleView(0)">首页</div>
      </li>
      <li>
        <div :class="active == 1?'active':'unactive'" @click="handleView(1)">公告</div>
      </li>
      <li>
        <div :class="active == 2?'active':'unactive'" @click="handleView(2)">流程管理</div>
      </li>
      <li>
        <div :class="active == 3?'active':'unactive'" @click="handleView(3)">业务办理</div>
      </li>
      <li>
        <div :class="active == 4?'active':'unactive'" @click="handleView(4)">任务管理</div>
      </li>
      <li>
        <div :class="active == 5?'active':'unactive'" @click="handleView(5)">流程跟踪</div>
      </li>
      <li>
        <div :class="active == 6?'active':'unactive'" @click="handleView(6)">系统管理</div>
      </li>
      <li>
        <div :class="active == 7?'active':'unactive'" @click="handleView(7)">业务办理</div>
      </li>
      <li>
        <div :class="active == 8?'active':'unactive'" @click="handleView(8)">系统工具</div>
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
  <div class="mian">
    <router-view/>
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
        active: '',
      }
    },
    methods: {
      handleView(str) {
        this.active = str
        switch(str) {
          case 0: this.$router.push('/index').catch(err => {});
          break;
          case 1: this.$router.push('/index').catch(err => {});
          break;
          case 2: this.$router.push('/index').catch(err => {});
          break;
          case 3: this.$router.push('/index').catch(err => {});
          break;
          case 4: this.$router.push('/index').catch(err => {});
          break;
          case 5: this.$router.push('/index').catch(err => {});
          break;
          case 6: this.$router.push('/index').catch(err => {});
          break;
          case 7: this.$router.push('/index').catch(err => {});
          break;
        }
      }
    }

}
</script>

<style lang="scss" scoped>
#container {
  width: 1920px;
  height: 1080px;
  background-color: #F8F8FE;

  .mian {
    width: 100%;
    height: 1020px;
  }

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
    width: 400px;
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
        // margin-right: 50px;
        line-height: 60px;
            /* 两个li之间的距离*/
        position: relative;
        .unactive {
          background-color: #ffffff;
          height: 60px;
          width: 120px;
        }

        .active {
          background-color: #3C7BFD;
          color: white;
          height: 60px;
          width: 120px;
        }

        div:hover{
          color: #FFFFFF;
          background-color: #3C7BFD;
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
