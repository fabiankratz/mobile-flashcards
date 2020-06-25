import { takeLeading, all, put } from 'redux-saga/effects'
import { LOAD_LOCAL_DATA } from '../actions'
import { setLocalData } from '../actions/shared'
import deviceStorage from '../utils/api'

function* loadLocalData () {
    try {
        yield deviceStorage.saveDeckTitle("test") 
        yield deviceStorage.addCardToDeck("test", {question: "testkjlt?", answer:"jekjelksjr"})
        const decks = yield deviceStorage.getDecks()
        yield put(setLocalData({decks}))
    } catch (e) {
        console.log(e)
    }
}

function* watchLoadLocalData () {
    yield takeLeading(LOAD_LOCAL_DATA, loadLocalData)
}

export default function* () {
    yield all([
        watchLoadLocalData()
    ])
}