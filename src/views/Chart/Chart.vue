<template>
    <div class="chartLeft">
        <Panel>
            <template v-slot:header>
                武汉各区实时公交在线表
            </template>
            <div>123</div>
        </Panel>
         <Panel>
            <template v-slot:header>
                武汉各区实时公交在线表
            </template>
            <div>123</div>
        </Panel>
    </div>
    <div class="chartRight">
        <Panel>
            <template v-slot:header>
                武汉各区实时公交在线表
            </template>
            <div>123</div>
        </Panel>
        <Panel>
            <template v-slot:header>
                武汉各区实时公交在线表
            </template>
            <div>123</div>
        </Panel>
        
    </div>
</template>

<script setup>
import Panel from '@/views/Chart/components/Panel.vue';
</script>

<style lang="less" scoped>
.chartLeft {
    width: 27vw;
    position: absolute;
    top: 12vh;
    left: 3vw;
}

.chartRight {
    width: 27vw;
    position: absolute;
    top: 12vh;
    left: 70vw;
}
</style>