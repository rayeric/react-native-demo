import { createStore, applyMiddleware } from 'redux';//applyMiddleware使能够使用thunk, logger中间件
import thunk from 'redux-thunk';//中间件，使能够在action中dispatch其他action
import { createLogger} from 'redux-logger';//action触发、state状态变化日志，在控制台输出
import appReducer from './reducers';//总的reducer，对state处理（改变状态）

const logger = createLogger();

const store = createStore(appReducer, applyMiddleware(thunk, logger));

export default store;
