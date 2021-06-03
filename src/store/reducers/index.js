import {combineReducers} from 'redux';
import { connectRouter } from '../../connected-react-router';
import counter from './counter'
import history from '../../history'
const reducers = {
  router: connectRouter(history),
  counter
}
const rootReducer = combineReducers(reducers)
export default rootReducer