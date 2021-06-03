import { applyMiddleware, createStore} from 'redux';
// todo routerMiddleware 中间件的作用就是准备接收 action 跳转路径
import {routerMiddleware} from 'connected-react-router';
import history from '../history'
import reducers from './reducers/'
const store = applyMiddleware(routerMiddleware(history))(createStore)(reducers)
export default store