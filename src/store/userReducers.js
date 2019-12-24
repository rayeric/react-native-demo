import { updateObject, createReducer } from '../utils/index';//插件，createReducer是用来创建reducer的，省去了reducer处理时switch...case步骤，就是降低了代码量

//初始状态值
let initialState = {
	token: '',
	userInfo: {
		avatar: '/images/timg.jpg',
		user_name: '未登录',
	},
};

//处理token的reducer
export const tokenReducer = createReducer(initialState.token, {
	SET_TOKEN: (tokenState, action) => {
		return action.token;
	},
});

/*处理userInfo的reducer
* actions.js中提到一个api需三种状态
* reducer就要对这三种状态进行处理
*
* 处理的状态是要处理的某一个(userInfo)，不是全部state，之所以这样，就免去了Object.assign这一步，不用担心之前的状态
* */
export const userInfoReducer = createReducer(initialState.userInfo, {
	FETCH_REQUEST: (userInfoState, action) => {
		return userInfoState;
	},
	FETCH_SUCCESS: (userInfoState, action) => {
		return action.userInfo;
	},
	FETCH_FAILURE: (userInfoState, action) => {
		return userInfoState;
	},
});
