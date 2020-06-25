import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from 'redux'

export const sagaMiddleware = createSagaMiddleware()

export default applyMiddleware(sagaMiddleware)