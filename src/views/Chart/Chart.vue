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
        <PanelSmall>
            <template v-slot:header>
                武汉三甲医院
            </template>
            <div class="hospital H100">
                <div class="hospitalItem H100" v-for="(item, index) in topThreeHospitals?.children || []" :key="index">
                    <p>
                        {{ item.title }}
                        <span>{{ item.amount }}{{ item.unit }}</span>
                    </p>
                    <img :src="proxy.$utils.getImageUrl(`../assets/images/icon/${item.imgSrc}`)" alt="图片丢失了">
                </div>
            </div>
        </PanelSmall>
        <PanelSmall>
            <template v-slot:header>
                武汉高校学生统计
            </template>
            <div class="student H100">
                <div class="studentItem H100" v-for="(item, index) in collegeStudents?.children || []" :key="index">
                    <p>
                        {{ item.title }}
                        <span>{{ item.amount }}{{ item.unit }}</span>
                    </p>
                    <img :src="proxy.$utils.getImageUrl(`../assets/images/icon/${item.imgSrc}`)" alt="图片丢失了">
                </div>
            </div>
        </PanelSmall>
    </div>
</template>

<script setup>
import Panel from '@/views/Chart/components/Panel.vue'
import PanelSmall from '@/views/Chart/components/PanelSmall.vue'
import { ColumnChart, RoseChart, PieChart } from '@opd/g2plot-vue'
import { usePeopleOutDoor } from '@/Hooks/peopleOutDoor'
import { useBusOnline } from '@/Hooks/busOnline'
import { usePopulation } from '@/Hooks/population'
import { getCurrentInstance, onMounted, ref } from 'vue'

const { proxy } = getCurrentInstance()
const { config: outDoorConfig, data: outDoorData } = usePeopleOutDoor()
const { config: busOnlineConfig, data: busOnlineData } = useBusOnline()
const { config: populationConfig, data: populationData } = usePopulation()

const topThreeHospitals = ref()
const collegeStudents = ref()


onMounted(async () => {
    topThreeHospitals.value = await proxy.$utils.getFileJson(proxy.$baseUrl + 'json/virtualData/topThreeHospitals.json')
    collegeStudents.value = await proxy.$utils.getFileJson(proxy.$baseUrl + 'json/virtualData/collegeStudents.json')

})
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

    .hospital {
        display: flex;
        align-items: center;
        justify-content: space-around;

        .hospitalItem {
            display: flex;
            // 垂直排列
            flex-direction: column;
            // 上下居中
            justify-content: center;
            // 左右居中
            align-items: center;
            font-weight: bold;

            p {
                span {
                    margin-left: 5px;
                }
            }

            img {
                margin-top: 5px;
                width: 50px;
                height: 50px;
            }
        }

        .hospitalItem:nth-child(2) {
            img {
                width: 30px;
                height: 30px;
                margin-top: 14px;
            }
        }
    }

    .student {
        display: flex;
        align-items: center;
        justify-content: space-around;

        .studentItem {
            display: flex;
            // 垂直排列
            flex-direction: column;
            // 上下居中
            justify-content: center;
            // 左右居中
            align-items: center;
            font-weight: bold;

            p {
                span {
                    margin-left: 5px;
                }
            }

            img {
                margin-top: 5px;
                width: 40px;
                height: 40px;
            }
        }
    }
}
</style>