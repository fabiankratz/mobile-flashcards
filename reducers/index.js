import decks from './decks'
import loading from './loading'
import quiz from './quiz'

import { combineReducers } from 'redux'

export default combineReducers({
    decks,
    loading,
    quiz
})