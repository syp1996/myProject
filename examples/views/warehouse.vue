/**
  这里是组件仓库
*/
<template>
  <div id="warehouse">
    <div class="sideBar">
      <ul>
        <li>
          <a @click="handleRouter('buttonView')">Button 按钮</a>
        </li>
        <li>
          <a>Icon 图标</a>
        </li>
        <li>
          <a>Typography 字体</a>
        </li>
        <li>
          <a>Color 色彩</a>
        </li>
        <li>
          <a>Border 边框</a>
        </li>
      </ul>
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleRouter(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
#warehouse {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .main {
    width: 1672px;
    padding: 24px;
  }

  ul {
    /* 清除ul标签的默认样式 */
    width: auto;
    /*宽度也改为自动*/
    list-style-type: none;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 0;
    padding: 0;
  }

  li {
    width: 100%;
    height: 44px;
    a {
      line-height: 44px;
      color:rgba(0, 0, 0,0.75)
    }

    a:hover {
      color: #3C7BFD;
      cursor:pointer;
    }
  }

  .sideBar{
    width: 200px;
    height: 1020px;
    background-color:white;
  }
}
</style>
