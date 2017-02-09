import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Routes from './routes';
import configureStore from './store';
import { getBanners } from './action-creators/banners';

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

class Root extends Component {
  componentDidMount(){
    store.dispatch(getBanners());
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          { Routes }
        </Router>
      </Provider>
    );
  }
}

export default Root;