class Utils {
    // 获取Json数据
    async getFileJson(url) {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("请求失败：" + response.status)
            }
            const data = await response.json()
            return data
        } catch (error) {
            console.error("获取Json出错" + error.message)
            return {}
        }
    }

    // 获得图片路径
    getImageUrl(path) {
        return new URL(path, import.meta.url).href
    }
}

const utils = new Utils()

export { utils }