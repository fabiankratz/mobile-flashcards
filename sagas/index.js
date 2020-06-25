import { takeLeading, all, put, call } from 'redux-saga/effects'
import { LOAD_LOCAL_DATA_ASYNC } from '../actions'
import { loadLocalData } from '../actions/shared'
import deviceStorage from '../utils/api'

function* loadLocalDataWorker () {
    try {
        yield call([deviceStorage, 'clearDecks'])
        yield call([deviceStorage, 'saveDeckTitle'], "test")
        yield call([deviceStorage, 'addCardToDeck'], "test", {question: "testkjlt?", answer:"jekjelksjr"})
        const decks = yield call([deviceStorage, 'getDecks'])
        yield put(loadLocalData(decks || {}))
    } catch (e) {
        console.log(e)
    }
}

function* loadLocalDataWatcher () {
    yield takeLeading(LOAD_LOCAL_DATA_ASYNC, loadLocalDataWorker)
}

export default function* () {
    yield all([
        loadLocalDataWatcher()
    ])
}