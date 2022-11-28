<template>
<div id="sideBar">
    <div class="nav">
        <ul>
            <li class="nav-item">第一行</li>
            <li class="nav-item">第一行</li>
            <li class="nav-item">第一行</li>
            <li class="nav-item">第一行</li>
            <li class="nav-item">第一行</li>
            <li class="nav-item">第一行</li>
            <li class="nav-item">第一行</li>
            <li class="nav-item">第一行</li>
            <li class="nav-item">第一行</li>
            <li class="nav-item">第一行</li>
            <li class="nav-item">第一行</li>
            <li class="nav-item">第一行</li>
            <li class="nav-item">第一行</li>
            <li class="nav-item">第一行</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#sideBar {
    width: 240px;
    height: 100%;
    position: fixed;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;

    // margin: 0 auto;
    ul li {
        list-style-type: none;
    }

    .nav {
        overflow: hidden;
        height: 200px;

        .nav-item {
            list-style: none;
            width: 100%;
            height: 40px;
            display: inline-block;
        }
    }

}
</style>
