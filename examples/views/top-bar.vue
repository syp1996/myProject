<template>
<div class="container">
    <!-- <h1>logo</h1> -->
    <center>
        <ul class="nav">
            <li>
                <div class="guid">指南</div>
            </li>
            <li>
                <div class="theme">主题</div>
            </li>
            <li>
                <div class="resource">资源</div>
            </li>
            <li>
                <div class="component" @click="goButton">组件</div>
            </li>
        </ul>
    </center>
</div>
</template>

<script>
export default {
    methods: {
      goButton(){
        this.$router.push('/buttonView')
      }
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding: 0;
    height: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdfe6;
    margin: 0 auto;
    width: 1140px;

    .nav {
        float: right;
        height: 100%;
        line-height: 80px;
        background: transparent;
        padding: 0;
        margin: 0;

        .component {
            color: rgba(0, 0, 0, 0.30)
        }

        .guid {
            color: rgba(0, 0, 0, 0.30)
        }

        .theme {
            color: rgba(0, 0, 0, 0.30)
        }

        .resource {
            color: rgba(0, 0, 0, 0.30)
        }

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

        li {
            float: left;
            /* 使li内容横向浮动，即横向排列  */
            margin-right: 50px;
            /* 两个li之间的距离*/
        }

        // li a {
        //     /* 设置链接内容显示的格式*/
        //     display: block;
        //     /* 把链接显示为块元素可使整个链接区域可点击 */
        //     color: white;
        //     text-align: center;
        //     padding: 14px 16px;
        //     text-decoration: none;
        //     /* 去除下划线 */
        // }
    }
}
</style>
