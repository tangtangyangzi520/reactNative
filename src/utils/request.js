/*
 * @Descripttion:
 * @Date: 2021-07-30 14:18:07
 * @LastEditTime: 2021-07-30 18:19:29
 * @LastEditors: kiki
 * @Author: Kiki
 */
import axios from 'axios';
import {BASE_URI} from './pathMap';

const instance = axios.create({
  baseURL: BASE_URI,
});

// 添加一个请求拦截器
instance.interceptors.request.use(
  function (config) {
      console.log('11111')
      return config.data;
    // 在发送请求之前做一些事情return config;
  },
  function (error) {
    // 做一些有请求错误的事情return Promise .reject(error );
    return Promise .reject(error );
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    console.log('22222')

    // 对响应数据做一些事情return response;
  },
  function (error) {
    // 对响应做一些事情错误return Promise .reject(error) ;
  },
);
export default {get: instance.get, post: instance.post};
