import React, { Component } from 'react';
import {Router} from 'react-router'
import {connect, ReactReduxContext} from 'react-redux'
import { onLocationChanged } from './actions'

// react-router-dom BrowserRouter HashRouter ConnectedRouter 内部都是用的 Router
// 这个组件的核心作用就是连接路由
class ConnectedRouter extends Component {
  static contextType = ReactReduxContext // this.context
  constructor(props) {
    super(props);
    console.log('ConnectedRouter', props)
    const { history, onLocationChanged } = props
    // 监听路由变化
    this.unListen = history.listen(onLocationChanged)
  }
  componentWillUnmount() {
    this.unListen()
  }
  render() {
    const {history, children} = this.props 
    return (
      <Router history={history}>{children}</Router>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onLocationChanged: (location, action) => dispatch(onLocationChanged(location, action))
})
 
export default connect(null, mapDispatchToProps)(ConnectedRouter);