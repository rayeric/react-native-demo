import store from '../store';

/**
 * @constant {string} BASE_URL
 * */
// export const BASE_URL = 'http://192.168.0.106:3000';
export const BASE_URL = 'http://116.62.44.20:3000';

/**
 * 封装 fetch 请求类
 * @class request
 * @static get request的静态方法get
 * @param {String} url api地址
 * @param {Object} params 参数
 *
 * @static post request的静态方法post
 * @static upload request的静态方法upload
 * @param {String} url api地址
 * @param {Object} data 参数
 *
 * 关于 fetch请求android的坑
 * base_url必须是线上地址或者是本机ip地址，localhost(127.0.0.1)不行
 * */
export class request {
	static get(url, params) {
		return new Promise((resolve, reject) => {
			if (params) {
				let paramsArray = [];
				//拼接参数
				Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
				if (url.search(/\?/) === -1) {
					url += '?' + paramsArray.join('&');
				} else {
					url += '&' + paramsArray.join('&');
				}
			}
			fetch(BASE_URL + url, {
				headers: {
					'Authorization': 'Bearer ' + store.getState().token,
				},
			})
				.then((response) => response.json())
				.then(result => {
					resolve(result);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	static post(url, data) {
		return new Promise((resolve, reject) => {
			fetch(BASE_URL + url, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': ' application/json',//multipart/form-data | application/json |
					'Authorization': 'Bearer ' + store.getState().token,
				},
				body: JSON.stringify(data), //需要发送的数据
				// mode: 'cors', //控制是否允许跨域 ：cors 、no-cors 、same-origin
				// cache: 'default', //缓存设置 ： default、no-store 、no-cache 、 force-cache 、 or only-if-cached
			}).then(response => response.json())
				.then(result => {
					resolve(result);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	static upload(url, data) {
		return new Promise((resolve, reject) => {
			fetch(BASE_URL + url, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'multipart/form-data',
					'Content-Encoding': 'identity',
					'Authorization': 'Bearer ' + store.getState().token,
				},
				body: data, //需要发送的数据
				// mode: 'cors', //控制是否允许跨域 ：cors 、no-cors 、same-origin
				// cache: 'default', //缓存设置 ： default、no-store 、no-cache 、 force-cache 、 or only-if-cached
			}).then(response => response.json())
				.then(result => {
					resolve(result);
				})
				.catch(error => {
					reject(error);
				});
		});
	}
}
