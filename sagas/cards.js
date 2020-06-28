import {ADD_CARD_ASYNC} from '../actions'
import { addCard, removeLastCard } from '../actions/cards'
import deviceStorage from '../utils/api'
import { put, call, takeLatest } from 'redux-saga/effects'

function* addCardWorker ({payload}) {
    yield put(addCard(payload.title, payload.card))
    try {
        yield call([deviceStorage, 'addCardToDeck'], payload.title, payload.card)
    } catch (e) {
        console.log(e)
        yield put(removeLastCard(payload.title))
    }
}

export function* addCardWatcher () {
    yield takeLatest(ADD_CARD_ASYNC, addCardWorker)
}