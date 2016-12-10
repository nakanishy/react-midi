import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import keyboardReducer from './reducers/keyboard';

export default function configureStore(history) {
  const middlewares = applyMiddleware(
    thunk,
    routerMiddleware(history)
  );

  const store = createStore(
    combineReducers({
      keyboard: keyboardReducer,
      routing: routerReducer
    }), {}, compose(
      middlewares,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
}
