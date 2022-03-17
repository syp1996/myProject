<template>
<div class="container">
    <!-- <h1>logo</h1> -->
    <center>
        <ul id="nav">
            <li>
                <a :class="{'active':active}" @click="goGuidance">指南</a>
            </li>
            <li>
                <a :class="{'active':active}">主题</a>
            </li>
            <li>
                <a :class="{'active':active}">资源</a>
            </li>
            <li>
                <a :class="{'active':active}" @click="goComponenet">组件</a>
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
    data() {
        return {
            active: false
        }
    },
    methods: {
        goGuidance() {
          this.$router.push('/guidance')
        },
        goComponenet() {
            this.$router.push('/buttonView')
        },
        goView() {
            $("ul").on("click", "li", function () {
                this.active = true;
                console.log('hhh', this.active);
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

        .active {
            color: red;
        }

        li {
            float: left;
            /* 使li内容横向浮动，即横向排列  */
            margin-right: 50px;
            /* 两个li之间的距离*/
            position: relative;
            // color: rgba(0, 0, 0, 1)
        }

        li .active {
            color: rgba(0, 0, 0, 1)
        }

        li a {
            /* 设置链接内容显示的格式*/
            display: block;
            /* 把链接显示为块元素可使整个链接区域可点击 */
            color: white;
            text-align: center;
            text-decoration: none;
            /* 去除下划线 */
            color: rgba(0, 0, 0, 0.35)
        }
    }
}
</style>
