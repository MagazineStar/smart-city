import { ref } from "vue"

export const usePeopleOutDoor = () => {
    const data = ref([
        { type: "汉阳区", value: 10000 },
        { type: "武昌区", value: 20000 },
        { type: "洪山区", value: 50000 },
        { type: "江夏区", value: 30000 },
        { type: "江岸区", value: 40000 },
    ])

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

    return {
        config,
        data
    }
}