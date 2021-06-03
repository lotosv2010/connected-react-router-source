export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'

export const onLocationChanged = (location, action, isFirstRendering = false) => ({
  type: LOCATION_CHANGE,
  payload: {
    location,
    action,
    isFirstRendering,
  }
})


export const CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD'
const updateLocation = (method) => {
  return (...args) => ({ // => action
    type: CALL_HISTORY_METHOD, // 调用历史对象上的方法参入参数名
    payload: {
      method, // 调用那个方法
      args // 传给这个方法的参数 ['/']
    }
  })
}

export const push = updateLocation('push')
export const replace = updateLocation('replace')
export const go = updateLocation('go')
export const goBack = updateLocation('goBack')
export const goForward = updateLocation('goForward')

export const routerActions = { push, replace, go, goBack, goForward }