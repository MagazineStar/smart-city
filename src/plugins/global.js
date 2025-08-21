// 全局配置引入
import { utils } from '../utils/common'

export default {
    install(app) {
        app.config.globalProperties.$utils = utils
        app.config.globalProperties.$baseUrl = import.meta.env.BASE_URL || '/'
    }
}