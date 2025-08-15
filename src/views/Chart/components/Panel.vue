<template>
    <div class="panel">
        <div class="panelHeader">
            <slot name="header"></slot>
        </div>
        <div class="panelContent">
            <slot></slot>
        </div>
    </div> 
</template>

<script setup>
</script>

<style lang="less" scoped>
.panel {
    margin-top: 8vh;
    height: 35vh;
    width: 23vw;
    // overflow: hidden;
    color: #ffffff;

    .panelHeader {
        width: 100%;
        height: 13%;
        background-image: url('../../../assets/images/material/chart-item.png');
        background-size: 88% 100%;
        background-repeat: no-repeat;
        background-position: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.95vw;
    }

    .panelContent {
        margin-top: 2%;
        height: 82%;
        background-color: #53697670;
        border-radius: 1vw;
        position: relative;
        padding: 30px;

        &::after {
            content: "";
            height: 35px;
            width: 112px;
            background-image: url('../../../assets/images/material/border.png');
            background-repeat: no-repeat;
            position: absolute;
            top: -6px;
            left: 0;
            transform: rotate(180deg);
        }

        &::before {
            content: "";
            height: 35px;
            width: 112px;
            background-image: url('../../../assets/images/material/border.png');
            position: absolute;
            bottom: -5px;
            right: 0;
        }
    }
}
</style>