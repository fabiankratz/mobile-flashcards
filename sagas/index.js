import { all } from 'redux-saga/effects'
import { loadLocalDataWatcher } from './shared'
import { endQuizWatcher, startQuizWatcher, addResultWatcher } from './quiz'

export default function* () {
    yield all([
        loadLocalDataWatcher(),
        endQuizWatcher(),
        startQuizWatcher(),
        addResultWatcher()
    ])
}