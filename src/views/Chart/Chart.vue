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
        <Panel>
            <template v-slot:header>
                武汉各区实时公交在线表
            </template>
            <div class="H100">
                <RoseChart class="W100 H100" v-bind="busOnlineConfig" :data="busOnlineData" />
            </div>
        </Panel>
    </div>
    <div class="chartRight">
        <Panel>
            <template v-slot:header>
                武汉各区今日出行人口统计
            </template>
            <div class="H100">
                <PieChart class="W100 H100" v-bind="populationConfig" :data="populationData" />
            </div>
        </Panel>
    </div>
</template>

<script setup>
import Panel from '@/views/Chart/components/Panel.vue'
import { ColumnChart, RoseChart, PieChart } from '@opd/g2plot-vue'
import { usePeopleOutDoor } from '@/Hooks/peopleOutDoor'
import { useBusOnline } from '@/Hooks/busOnline'
import { usePopulation } from '@/Hooks/population'

const { config: outDoorConfig, data: outDoorData } = usePeopleOutDoor()
const { config: busOnlineConfig, data: busOnlineData } = useBusOnline()
const { config: populationConfig, data: populationData } = usePopulation()
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
    top: 5vh;
    left: 74vw;
}
</style>