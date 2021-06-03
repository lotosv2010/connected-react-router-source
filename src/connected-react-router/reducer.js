import { LOCATION_CHANGE } from './actions'

const connectRouter = (history) => {
  const {action, location} = history
  const initialState = {
    action,
    location
  }
  return (state = initialState, {type, payload} = {}) => {
    if(type === LOCATION_CHANGE) {
      const {location, action} = payload
      return {...state, location, action}
    }
    return state
  }
}

export default connectRouter