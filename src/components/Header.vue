<template>
    <header class="header">
        <div class="timer">
            <p>{{ time.year }}年{{ time.month }}月{{ time.day }}日</p>
            <p>{{ time.hours }}时{{ time.minutes }}分</p>
        </div>
        <span>智慧城市——武汉</span>
    </header>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue';

const time = ref({
    year: '',
    month: '',
    day: '',
    hours: '',
    minutes: ''
})

// 保存定时器
let timer

// 获取现在时间
const acquisitionTime = () => {
    const date = new Date()
    // 获取年
    time.value.year = date.getFullYear()
    time.value.month = String(date.getMonth() + 1).padStart(2, '0')
    time.value.day = String(date.getDate()).padStart(2, '0')
    time.value.hours = String(date.getHours()).padStart(2, '0')
    time.value.minutes = String(date.getMinutes()).padStart(2, '0')
}

onMounted(() => {
    acquisitionTime()
    timer = setInterval(acquisitionTime, 1000);
})

onUnmounted(() => {
    clearInterval(timer)
})


</script>

<style lang="less" scoped>
.header {
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100vw;
    height: 10vh;
    background-image: url('@/assets/images/material/header.png');
    background-size: cover;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 2.3vw;

    .timer {
        font-size: 1.2vw;
        text-align: center;
        margin-left: 2.5vw;
    }
    span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
    }
}

</style>