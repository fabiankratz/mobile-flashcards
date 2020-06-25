import { loadLocalData, startLoading, finishLoading } from '../actions/shared'
import { LOAD_LOCAL_DATA_ASYNC } from '../actions'
import { takeLeading, put, call } from 'redux-saga/effects'
import deviceStorage from '../utils/api'

function* loadLocalDataWorker () {
    let data;
    yield put(startLoading())
    try {
        data = yield call([deviceStorage, 'getData'])
    } catch (e) {
        console.log(e)
    } finally {
        yield put(loadLocalData(data))
        yield put(finishLoading())
    }
}

export function* loadLocalDataWatcher () {
    yield takeLeading(LOAD_LOCAL_DATA_ASYNC, loadLocalDataWorker)
}
