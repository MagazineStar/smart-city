<template>
    <div class="panel">
        <div  class="panelHeader">
            <slot name="header"></slot>
        </div>
        <div class="panelccContent">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.panel {
    border: 0.5vh solid #ffffff;
    height: 32vh;
    width: 28vw;
    overflow: hidden;
    margin-top: 10vh;

    .panel-header {
        width: 100%;
        height: 30%;
        background-color: #f2f2f2;
        
    }
}
</style>