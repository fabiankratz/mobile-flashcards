import { all } from 'redux-saga/effects'
import { loadLocalDataWatcher } from './shared'
import { endQuizWatcher, startQuizWatcher, addResultWatcher } from './quiz'
import { saveDeckTitleWatcher } from './decks'
import { addCardWatcher } from './cards'

export default function* () {
    yield all([
        loadLocalDataWatcher(),
        endQuizWatcher(),
        startQuizWatcher(),
        addResultWatcher(),
        saveDeckTitleWatcher(),
        addCardWatcher(),
    ])
}