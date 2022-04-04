import axios from "axios";
import VueRouter from "vue-router";
axios.defaults.timeout = 5000; //超时时间是5秒
axios.defaults.withCredentials = true; //允许跨域

//Content-Type 响应头
axios.defualts.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UFT-8';
//基础url
axios.defaults.baseURL = "http://localhost:8888";

// 响应拦截器
axios.interceptors.response.use(
    response => {
        //如果response里面的status是200， 说明访问到了接口，否则错误
        if (response.status == 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                //401未登录
                case 401:
                    router.replace({
                        path: '/',
                        query: {
                            redirect: router.currentRout.fullPath
                        }
                    });
                    break;
                    //404未找到
                case 404:
                    break;
            }
        }
        return Promise.reject(error.response);
    }

)


/**
 * 封装get方法
 */
export function get(url, param = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: params })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);
            })
    });
}

/**
 * 封装post方法
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, data)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);
            })
    });
}