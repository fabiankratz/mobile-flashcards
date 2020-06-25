import {SAVE_DECK_TITLE_ASYNC} from '../actions'
import { saveDeckTitle, removeDeckTitle } from '../actions/decks'
import deviceStorage from '../utils/api'
import { put, call, takeLatest } from 'redux-saga/effects'

function* saveDeckTitleWorker ({payload}) {
    yield put(saveDeckTitle(payload.title))
    try {
        yield call([deviceStorage, 'saveDeckTitle'], payload.title)
    } catch (e) {
        console.log(e)
        yield put(removeDeckTitle(payload.title))
    }
}

export function* saveDeckTitleWatcher () {
    yield takeLatest(SAVE_DECK_TITLE_ASYNC, saveDeckTitleWorker)
}