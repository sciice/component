import axios from 'axios';
import { message } from 'antd';

axios.defaults.baseURL = window.routerBase;
axios.defaults.headers.common['X-CSRF-TOKEN'] = window.token;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// 全局错误拦截
const errCode = {
  400: '请求错误',
  401: '未授权，请登录',
  403: '拒绝访问',
  404: '请求出错',
  405: '请求错误',
  408: '请求超时',
  419: '认证超时, 请刷新页面',
  422: '认证失败',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持',
};

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 200 || (response.status === 200 && response.data.message)) {
      message.destroy();
      message.success(response.data.message);
    }
    return response;
  },
  error => {
    const err = error.response;
    let errorMsg;

    // 登录过期
    if (err.status === 401 || err.data.code === 401) {
      window.g_app._store.dispatch({
        type: 'app/logout',
        payload: false,
      });
    }

    // 全局错误信息
    if (err.data.errors && err.status === 422) {
      errorMsg = Object.keys(err.data.errors).map(key => err.data.errors[key][0])[0];
    } else if (err.data.message) {
      errorMsg = err.data.message;
    } else {
      errorMsg = errCode[err.status];
    }
    errorMsg = {
      message: errorMsg,
    };

    return Promise.reject(errorMsg);
  }
);

export default axios;
