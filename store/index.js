const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
    return {
        user : null
    }
}

export const mutations = {
    setUser (state,data){
        state.user = data
    }
}
export const actions = {
    //特殊的action方法
    // 这个action 会在服务端渲染期间自动调用
    // 作用： 初始化容器数据，传递数据给客户端用
    nuxtServerInit({commit},{req}){
        let user = null;
        if(req.headers.cookie){
            const parsed = cookieparser.parse(req.headers.cookie)

            try {
                user = JSON.parse(parsed.user)
            } catch (error) {
                
            }
        }
        commit('setUser',user)
    }
}
