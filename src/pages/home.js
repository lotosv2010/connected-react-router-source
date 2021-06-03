import React from 'react';
import {connect} from 'react-redux'
import actions from '../store/actions/counter'
const Home = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => props.history.goBack()}>返回</button>
    </div>
  )
}
export default connect(
  state => state.counter,
  actions
)(Home)