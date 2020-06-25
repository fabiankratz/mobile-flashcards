import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from 'redux'
import logger from './logger'

export const sagaMiddleware = createSagaMiddleware()

export default applyMiddleware(sagaMiddleware, logger)