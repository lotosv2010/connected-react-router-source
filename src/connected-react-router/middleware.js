import {CALL_HISTORY_METHOD} from './actions'
/**
 * 作为中间件首先要重新 store.dispatch 方法，加新的逻辑
 * 判断是不是要跳转，如果是帮你跳转
 */
const routerMiddleware = (history) => middlewareAPI => next => action => {
  if(action.type !== CALL_HISTORY_METHOD) {
    return next(action)
  }
  const {payload: {method, args}} = action
  history[method](...args)
}
export default routerMiddleware