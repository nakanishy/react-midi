import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';

import Landing from './containers/Landing';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={ store }>
    <div>
      <Router history={ history }>
        <Route path="/" component={ Landing } />
      </Router>
    </div>
  </Provider>,
  document.getElementById('react')
);
