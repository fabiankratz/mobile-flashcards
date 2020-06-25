import { takeLeading, all, put, call } from 'redux-saga/effects'
import { LOAD_LOCAL_DATA_ASYNC } from '../actions'
import { loadLocalData, startLoading, finishLoading } from '../actions/shared'
import deviceStorage from '../utils/api'

function* loadLocalDataWorker () {
    let decks;
    yield put(startLoading())
    try {
        decks = yield call([deviceStorage, 'getDecks'])
    } catch (e) {
        console.log(e)
    } finally {
        yield put(loadLocalData(decks || {}))
        yield put(finishLoading())
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