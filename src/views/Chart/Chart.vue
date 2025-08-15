<template>
    <div class="chartLeft">
        <Panel>
            <template v-slot:header>
                武汉各区今日出行人口统计
            </template>
            <div class="H100">
                <ColumnChart class="W100 H100" v-bind="outDoorConfig" :data="outDoorData" />
            </div>
        </Panel>
    </div>
    <div class="chartRight">

    </div>
</template>

<script setup>
import Panel from '@/views/Chart/components/Panel.vue'
import { ColumnChart } from '@opd/g2plot-vue'
import { usePeopleOutDoor } from '@/Hooks/peopleOutDoor'
const { config: outDoorConfig, data: outDoorData } = usePeopleOutDoor()
</script>

<style lang="less" scoped>
.chartLeft {
    width: 27vw;
    position: absolute;
    top: 5vh;
    left: 3vw;
}

.chartRight {
    width: 27vw;
    position: absolute;
    top: 12vh;
    left: 70vw;
}
</style>