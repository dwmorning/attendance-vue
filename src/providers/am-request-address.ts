
const AmRequestAddress = {
    /**用户信息模块 */
    login: 'users/login', // 用户登录
    getUserInfos: '/users/infos', // 获取用户信息

    /** 打卡模块 */
    getUserTime: '/signs/time', // 获取用户打卡信息
    updateUserTime: '/signs/time', // 更新用户打卡信息

    /** 审批模块 */
    getChecks: '/checks/apply', // 获取用户审批信息
    addChecks: '/checks/apply', // 添加用户审批信息
    updateChecks: '/checks/apply', // 更新用户审批信息

    /** 消息模块 */
    getNews: '/news/remind', // 获取消息提醒审批信息
    updateNews: '/news/remind', // 更新消息提醒信息

    /** 重置模块 */
    register: '/users/register', // 重置初始数据
   
}

export default AmRequestAddress;
