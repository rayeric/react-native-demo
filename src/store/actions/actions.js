import actionType from './actionType';
import { getUserInfo } from '../../apis/user';

/*
 * 请求用户信息 action（redux官网建议，一个api请求需3种状态，即：请求开始、成功、失败），意在请求开始和失败的时候做处理。
（我觉得有点多余，不过正式项目需严谨处理）
*/

/**
 * 请求开始
 * @method
 * @return {Object} 返回action对象
 * */
function fetchRequest() {
	return {
		type: actionType.FETCH_REQUEST,
	};
}

/**
 * 请求成功
 * @method
 * @param {Object} data 请求成功后的数据
 * @return {Object} 返回action对象
 * */
function fetchSuccess(data) {
	return {
		type: actionType.FETCH_SUCCESS,
		userInfo: data,
	};
}

/**
 * 请求失败
 * @method
 * @return {Object} 返回action对象
 * */
function fetchFailure() {
	return {
		type: actionType.FETCH_FAILURE,
	};
}

/**
 * 异步action 触发以上三种 action
 * @method
 * */
export function getUserInfoAction() {
	return dispatch => {
		dispatch(fetchRequest());

		return getUserInfo().then(res => {
			if (res.state === 1) {
				dispatch(fetchSuccess(res.data));
			}
		}).catch(() => dispatch(fetchFailure()));
	};
}

/**
 * 存储token
 * @method
 * @param {String} value token值
 * @return {Object} 返回action对象
 * */
export function setToken(value) {
	return {
		type: 'SET_TOKEN',
		token: value,
	};
}

//设置封面
export function setCover(cover) {
	return {
		type: 'SET_COVER',
		cover
	};
}
