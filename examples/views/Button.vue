<template>
<div class="container">
    <div>
        <my-Button>默认按钮</my-Button>
        <my-Button type="primary">主要按钮</my-Button>
        <my-Button type="success">成功按钮</my-Button>
        <my-Button type="info">信息按钮</my-Button>
        <my-Button type="warning">警告按钮</my-Button>
        <my-Button type="danger">危险按钮</my-Button>
    </div>
    <div style="margin-top:20px">
        <my-Button>朴素按钮</my-Button>
        <my-Button type="primary" plain>主要按钮</my-Button>
        <my-Button type="success" plain>成功按钮</my-Button>
        <my-Button type="info" plain>信息按钮</my-Button>
        <my-Button type="warning" plain>警告按钮</my-Button>
        <my-Button type="danger" plain>危险按钮</my-Button>
    </div>
    <div style="margin-top:20px">
        <my-Button size="small">朴素按钮</my-Button>
        <my-Button>朴素按钮</my-Button>
        <my-Button size="medium">朴素按钮</my-Button>
    </div>
</div>
</template>

<script>
export default {
    name: 'buttonView',
    created() {

    },
    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss"  scoped>

</style>
