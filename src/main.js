import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { request } from './network/request.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
        el: '#app',
        router,
        render: h => h(App)
    })
    // axios({
    //     //baseURL:http://152.136.185.210:7878/api/m5
    //     // url: 'http://152.136.185.210:7878/api/m5/home/data',
    //     // params: {
    //     //     type: 'sell',
    //     //     page: 3
    //     // },
    //     url: 'http://127.0.0.1:3007/person',
    //     // //默认的方式就是get
    //     //默认的方式就是get
    //     methods: 'get'
    // }).then(res => {
    //     console.log(res);
    // })


//默认的一些全局配置
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5/home/data'
// axios.defaults.timeout = 5000
//     //发送并发请求
// axios.all(
//         [
//             axios({
//                 // baseURL:'',  


//                 //注意 params与get对应，data与post对应
//                 params: {
//                     type: 'sell',
//                     page: 1
//                 }
//             }),
//             axios({
//                 // params: {
//                 //     type: 'sell',
//                 //     page: 2
//                 // }
//                 url: '?type=sell&page=2'
//             })
//         ]
//     ).then(results => {
//         //返回的是一个数组
//         console.log(results);
//         // console.log(results[0]);
//         // console.log(results[1]);

//     })
//     //处理这里的数组可以用另一个方法:
//     //.then(axios.spread((res1,res2)=>{
//     //    console.log(res1);
//     //    console.log(res2)
//     //})


//当业务量足够大的时候，会有多个服务器，因此这个时候在使用全局的baseURL等配置就显得不合适了
//应当采取一下的方法 ：
//创建相应的axios实例

//这个instance就相当于一个小全局
// const instance1 = axios.create({
//         baseURL: 'http://152.136.185.210:7878/api/m5/home/data',
//         timeout: 1000
//     })
//     //具体应用
// instance1({
//     params: {
//         type: 'sell',
//         page: 1
//     }
// }).then(res => { console.log(res); })
// instance1({
//     params: {
//         type: 'sell',
//         page: 1
//     }
// }).then(res => { console.log(res); })

//最终做法,使用封装好的网络请求函数
request({
    params: {
        type: 'sell',
        page: 2
    }
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})