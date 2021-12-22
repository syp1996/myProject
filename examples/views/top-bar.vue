<template>
<div class="container">
    <!-- <h1>logo</h1> -->
    <center>
        <ul id="nav">
            <li class="active" >
                <a>指南</a>
            </li>
            <li class="active">
                <a>主题</a>
            </li>
            <li class="active">
                <a>资源</a>
            </li>
            <li class="active">
                <a>组件</a>
            </li>
        </ul>
    </center>
</div>
</template>

<script>
import $ from 'jquery';
export default {

    mounted() {
        this.goView()
    },
    methods: {

        goView() {
            $("ul").on("click", "li", function () {
                alert($(this).text())
            })
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

    #nav {
        float: right;
        height: 100%;
        line-height: 80px;
        background: transparent;
        padding: 0;
        margin: 0;

        .nav-item a {
            color: rgba(0, 0, 0, 1)
        }

        div.component::after {
            content: "";
            display: inline-block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 30px;
            height: 2px;
            background: #409eff;
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
            position: relative;
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
