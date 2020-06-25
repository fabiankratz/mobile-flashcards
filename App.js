import React from 'react';
import { Provider} from 'react-redux'
import { createStore } from 'redux'
import middleware, { sagaMiddleware } from './middleware'
import reducer from './reducers'
import Main from './components/Main'
import rootSaga from './sagas'
import {composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(middleware))

sagaMiddleware.run(rootSaga)

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}