import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import Home from './pages/home';
import Counter from './pages/counter';
import history from './history';
import store from './store/';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <header style={{height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
          <Link to='/'>Home</Link>
          <Link to='/counter'>Counter</Link>
        </header>
        <main style={{textAlign: 'center'}}>
          <Route exact={true} path='/' component={Home} />
          <Route path='/counter' component={Counter} />
        </main>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
/**
 * connected-react-router
 * 连接路由和redux仓库
 * 1.每当路由发生改变之后要把最新的路由信息同步到仓库中去，这样的话就可以在仓库中获取最新的路由信息了
 * 2.我们可以通过派发动作action的方式让路由进行跳转
 */