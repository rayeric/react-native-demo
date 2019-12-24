import { combineReducers } from 'redux';
import { tokenReducer, userInfoReducer } from './userReducers';
import { coverReducer } from './coverReducer';
//整合reducer
const appReducer = combineReducers({
	token: tokenReducer,
	userInfo: userInfoReducer,
	cover: coverReducer,
});

export default appReducer;
