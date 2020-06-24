import React from 'react';
import { Provider} from 'react-redux'
import { createStore } from 'redux'
import middleware from './middleware'
import reducer from './reducers'
import Main from './components/Main'

const store = createStore(reducer, middleware)

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}