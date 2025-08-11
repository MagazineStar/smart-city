<template>
    <!-- 构造城市场景组件 -->
    <div>

    </div>
</template>

<script setup>
import { CityBuildingLayer, LayerSwitch, LineLayer } from '@antv/l7'
import axios from 'axios'
import { inject, onMounted } from 'vue'

const { scene, map } = inject('$scene_map')

const apiURL = (name) => {
    if (import.meta.env.DEV) {
        return `http://localhost:8080/${name}`
    }
    return `${import.meta.env.BASE_URL}json/${name}.json`
}

// 封装获取武汉建筑函数
const renderBuilding = async () => {
    const buildData = await axios.get(apiURL('wuhan_buildings'))
    console.log(buildData.data);
    // 构造武汉城市建筑物
    const wuhan_buildingLayer = new CityBuildingLayer({ name: '武汉建筑' })
    wuhan_buildingLayer
        // 数据来源
        .source(buildData.data)
        .color('rgba(242,242,250,1.0)')
        .animate(true)
        // 通常配合交互使用，比如用户鼠标移到建筑物上时的高亮反馈
        .active({
            color: '#0ff',
            mix: 0.5
        })
        .style({
            opacity: 0.7,
            baseColor: "rgb(16, 16, 16)",
            windowColor: "rgb(130, 160, 189)",
            brightColor: "rgb(255, 176, 38)",
            // 设置扫光效果
            sweep: {
                enable: true,
                sweepRadius: 2,
                sweepColor: '#1990FF',
                sweepSpeed: 0.5,
                // 泛光中心点
                sweepCenter: [114.30, 30.50]
            }
        })
        // 添加filter对数据进行筛选，不然数据过大，会导致系统卡顿
        // Elevation字段为建筑物的海拔高度，大于40的才显示
        .filter('Elevation', h => h > 40)
    scene.addLayer(wuhan_buildingLayer)
    return wuhan_buildingLayer
}

// 封装获取武汉道路函数
const renderRoad = async () => {
    // 渲染武汉城市道路 
    const roadData = await axios.get(apiURL('wuhan_roads'))
    console.log(roadData.data);
    const wuhan_roadLayer = new LineLayer({ name: "武汉道路" })
    const colors = [
        '#816CAD',
        '#A67FB5',
        '#C997C7',
        '#DEB8D4',
        '#F5D4E6',
        '#FAE4F1',
        '#FFF3FC'
    ]
    wuhan_roadLayer
        .source(roadData.data)
        .size(1)
        .shape('line')
        .color("type", colors)
        .animate({
            interval: 1, // 流线间隔
            duration: 2, // 流线持续时间
            traillength: 2 // 流线长度
        })
        .filter("coordinates", (e) => {
            return e.length > 20
        })
    scene.addLayer(wuhan_roadLayer)
    return wuhan_roadLayer
}

onMounted(() => {
    scene.on('load', async () => {
        const wuhan_buildingLayer = await renderBuilding()
        const wuhan_roadLayer = await renderRoad()

        // 将两个图层放到layerSwitch中管理
        const layerSwitch = new LayerSwitch({
            title: '图层目录',
            btnText: '切换图层',
            layers: [wuhan_buildingLayer, wuhan_roadLayer]
        })
        scene.addControl(layerSwitch)
    })

})
</script>

<style lang="less" scoped></style>