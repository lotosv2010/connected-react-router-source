import React from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/counter'
const Counter = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Counter</h1>
      <p>counter: {props.number}</p>
      <button onClick={() => props.add()}>+</button>
      <button onClick={() => props.minus()}>-</button>
      <button onClick={() => props.history.push('/')}>去Home(history)</button>
      <button onClick={() => props.goto('/')}>去Home(goto)</button>
    </div>
  )
}
export default connect(
  state => state.counter,
  actions
)(Counter)