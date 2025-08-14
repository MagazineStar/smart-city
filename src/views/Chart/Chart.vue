<template>
    <div class="chartLeft">
        <Panel>
            <template v-slot:header>
                武汉各区今日出行人口统计
            </template>
            <div class="H100">
                <ColumnChart class="W100 H100" v-bind="config" :data="data" />
            </div>
        </Panel>
    </div>
    <div class="chartRight">

    </div>
</template>

<script setup>
import Panel from '@/views/Chart/components/Panel.vue';
import { ColumnChart } from '@opd/g2plot-vue';
import { ref } from 'vue';

const green = "#00B96B";
const yellow = "#fd7e14";
const red = "#dc3545";
const config = {
    xField: "type",
    yField: "value",
    seriesField: "value",
    label: {
        // 可手动配置 label 数据标签位置
        position: "top", // 'top', 'bottom', 'middle',
        // 配置样式
        style: {
            fill: "#FFFFFF",
            opacity: 0.6,
        },
    },
    color: ({ value }) => {
        if (value > 40000) {
            return red;
        } else if (value > 20000 && value < 40000) {
            return yellow;
        } else {
            return green;
        }
    },
    legend: false,
    autoFit: true // 让图表跟随容器变化
    // height: 330,
}

const data = ref([
    { type: "汉阳区", value: 10000 },
    { type: "武昌区", value: 20000 },
    { type: "洪山区", value: 50000 },
    { type: "江夏区", value: 30000 },
    { type: "江岸区", value: 40000 },
])

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