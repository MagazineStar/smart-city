<template>
    <!-- 添加场景控件组件 -->
    <div class="navigation_control" @click="toggleNavigation"> {{ navigationIcon }} </div>
</template>

<script setup>
import { Fullscreen, Logo, MouseLocation, Zoom, MapTheme } from '@antv/l7';
import { inject, ref } from 'vue';
import logoImage from '@/assets/images/ViewLogo.png'

const { map, scene } = inject('$scene_map')
const token = import.meta.env.VITE_TOKEN
const navigationVisible = ref(false)
const navigationIcon = ref('>')
// 地图导航控件
let navigation


// 在onMounted中加载会出现重复加载控件的问题
scene.on('load', () => {
    // 第一个地图控件 Logo (增加地图自身Logo)
    const logo = new Logo({
        img: logoImage,
        href: 'https://www.yuque.com/magazinestar/openlayers?# 《OpenLayers》',
        position: 'leftbottom'
    })
    scene.addControl(logo)

    // 第二个地图控件 Zoom (控制地图放大缩小)
    const zoom = new Zoom({
        zoomInTitle: '放大',
        zoomOutTitle: '缩小',
        position: 'bottomright'
    })
    scene.addControl(zoom)

    // 第三个地图控件 fullScreen (控制地图全屏显示)
    const fullScreen = new Fullscreen({
        btnText: '全屏',
        exitBtnText: '退出全屏'
    })
    scene.addControl(fullScreen)

    // 第四个地图控件 mouseLocation (显示当前鼠标位置)
    const mouseLocation = new MouseLocation({
        transform: (position) => {
            return position.map(item => item.toFixed(5))
        },
        position: 'rightbottom'
    })
    scene.addControl(mouseLocation)

    // 第五个 MapTheme (控件切换多种地图样式)
    const mapTheme = new MapTheme({
        options: [
            {
                text: 'streets',
                value: 'mapbox://styles/mapbox/streets-v12',
                img: new URL('@/assets/images/Layer/streets-v12.png', import.meta.url).href
            }, {
                text: 'outdoors',
                value: 'mapbox://styles/mapbox/outdoors-v12',
                img: new URL('@/assets/images/Layer/outdoors-v12.png', import.meta.url).href
            }, {
                text: 'light',
                value: 'mapbox://styles/mapbox/light-v11',
                img: new URL('@/assets/images/Layer/light-v11.png', import.meta.url).href
            }, {
                text: 'dark',
                value: 'mapbox://styles/mapbox/dark-v11',
                img: new URL('@/assets/images/Layer/dark-v11.png', import.meta.url).href
            }, {
                text: 'satellite',
                value: 'mapbox://styles/mapbox/satellite-v9',
                img: new URL('@/assets/images/Layer/satellite-v9.png', import.meta.url).href
            }, {
                text: 'satellite-streets',
                value: 'mapbox://styles/mapbox/satellite-streets-v12',
                img: new URL('@/assets/images/Layer/satellite-streets-v12.png', import.meta.url).href
            }
        ]
    })
    scene.addControl(mapTheme)

    // 第六个 地图导航控件 使用本地化的 MapboxDirections 实现路径规划（驾车/骑行/步行） 按钮控制显隐
    navigation = new MapboxDirections({
        accessToken: token,
        unit: 'metric', // 单位设置为“公制”（公里/米）
        language: 'zh-CN',  // 界面语言为中文
        interactive: false, // 设置为 false 禁止用户拖拽起点终点（可视需要设为 true）
        profile: 'mapbox/driving', // 使用“驾车”模式，可改为 "mapbox/walking" 或 "mapbox/cycling"
        controls: {
            inputs: true, // 显示起点/终点输入框
            instructions: true,  // 显示文字形式的导航指引
            profileSwitcher: true // 显示模式切换器（驾车/步行/骑行）
        }
    })
})

// 六-一 导航控件 按钮控制显隐
const toggleNavigation = () => {
    if (navigation) {
        if (navigationVisible.value) {
            map.removeControl(navigation)
            navigationIcon.value = '>'
        } else {
            map.addControl(navigation, "top-left")
            navigationIcon.value = '<'
        }
        navigationVisible.value = !navigationVisible.value
    }
}
</script>

<style lang="less" scoped>
.l7-control-logo {
    margin-bottom: 37px !important;
}

.l7-popper.l7-popper-start {
    z-index: 1000;
}

.mapboxgl-ctrl-top-left {
    z-index: 3;
}

.navigation_control {
    position: absolute;
    left: 0px;
    top: 140px;
    cursor: pointer;
    color: #000;
    width: 18px;
    height: 27px;
    background-color: #fff;
    border-top-left-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 10px;
    user-select: none;
    padding-left: 9px;
}

</style>