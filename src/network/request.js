//将网络请求封装为一个函数(有利于日后代码的维护)
import axios from 'axios'
export function request(config) {
    //1 创建axios实例
    const instance1 = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/m5/home/data',
            timeout: 3000
        })
        //2 axios的拦截器:请求成功拦截 请求失败拦截 响应成功拦截 响应失败拦截

    //2.1请求拦截
    instance1.interceptors.request.use(config => {

        //为什么要拦截?
        //config里面的一些信息不符合服务器要求
        //每次在发送请求时，都希望在界面显示一个请求(旋转)的图标
        //某些网络请求(；例如登录(token))需要携带一些特殊的信息

        //console.log(config);

        //放行config 若不放行，则后面的步骤就被拦截断了
        return config
    }, err => { console.log(err); })

    //2.2响应拦截
    instance1.interceptors.response.use(res => {
        //同样需要放行
        //console.log(res);
        return res.data
    }, err => { console.log(err); })




    //因为axios实例返回的是一个promise对象
    //若使用其他框架或方法返回的对象不是promise对象时，这是需要手动返回一个promise对象，以便后面的回调处理等操作
    //3 发送网络请求
    return instance1(config)
}