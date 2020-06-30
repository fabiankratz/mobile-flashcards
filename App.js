import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { Provider} from 'react-redux'
import { createStore } from 'redux'
import middleware, { sagaMiddleware } from './middleware'
import reducer from './reducers'
import Main from './components/Main'
import rootSaga from './sagas'
import {composeWithDevTools } from 'redux-devtools-extension'
import { NavigationContainer } from '@react-navigation/native';
import { setLocalNotification } from './utils/notifications'
import {YellowBox} from 'react-native';
// Warning caused by expo-notifications, as it imports AsyncStorage the old way for backwards compatibility
YellowBox.ignoreWarnings(['Warning: AsyncStorage has been extracted from react-native core']);

const store = createStore(reducer, composeWithDevTools(middleware))

sagaMiddleware.run(rootSaga)

export default function App() {
  useEffect(() => {
    setLocalNotification()
  }, [setLocalNotification])
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />  
      </NavigationContainer>
    </Provider>
  );
}