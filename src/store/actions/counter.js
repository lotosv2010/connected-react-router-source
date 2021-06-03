import { push } from 'connected-react-router'
import * as types from '../action-types'
const actionCreators = {
  add() {
    return {type: types.ADD}
  },
  minus() {
    return {type: types.MINUS}
  },
  goto(path) {
    return push(path)
  }
}
export default actionCreators