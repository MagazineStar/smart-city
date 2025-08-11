<template>
    <!-- 新增头部组件 -->
    <Header/>
    <div id="components">
        <RouterView/>
    </div>
    <div id="map"></div>
</template>

<script setup>
// 引入依赖
// 引入mapboxgl依赖
import mapboxgl from 'mapbox-gl'
// 引入L7依赖
import { Scene } from '@antv/l7'
import { Mapbox } from '@antv/l7-maps'
// 引入Vue
import { onMounted } from 'vue'
// 引入main.js
import { app } from './main'
// 引入头部组件
import Header from '@/components/Header.vue'

// 组件加载后，初始化地图
onMounted(() => {  
    // 获取token
    const token = import.meta.env.VITE_TOKEN
    mapboxgl.accessToken = token

    // 创建mapbox地图
    const map  = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [114.30, 30.50],
        zoom: 13,
        projection: 'globe'
    })

    // 创建L7地图
    const scene = new Scene({
        id: 'map',
        map: new Mapbox({
            mapInstance: map
        }),
        // 消除L7自带logo
        logoVisible: false
    })
    
    // 添加特效
    map.on('style.load', () => {
        // 开启雾化
        map.setFog({})
    })

    // 全局注入 将scene和map传给所有子组件
    app.provide('$scene_map', { scene, map })
})


</script>

<style lang="less" scoped>
#components {
    position: absolute;
    z-index: 3;
}

#map {
    width: 100vw;
    height: 100vh;
}
</style>