import { END_QUIZ_ASYNC , START_QUIZ_ASYNC, ADD_RESULT_ASYNC } from '../actions'
import { startQuiz, endQuiz, addResult, removeLastResult } from '../actions/quiz'
import { takeLeading, put, call, takeEvery } from 'redux-saga/effects'
import deviceStorage from '../utils/api'

function* startQuizWorker ({payload}) {
    yield put(startQuiz(payload.title))
    try {
        yield call([deviceStorage, 'startQuiz'], payload.title)
    } catch (e) {
        console.log(e)
        yield put(endQuiz())
    } 
}

function* endQuizWorker () {
    yield put(endQuiz())
    try {
        yield call([deviceStorage, 'endQuiz'])
    } catch (e) {
        console.log(e)
        try {
            const quiz = yield call([deviceStorage, 'getQuiz'])
            yield put(loadQuizState(quiz))
        } catch (e) {
            console.log(e)
        }
    } 
}

function* addResultWorker ({payload}) {
    yield put(addResult(payload.result))
    try {
        yield call([deviceStorage, 'addResult'], payload.result)
    } catch (e) {
        console.log(e)
        yield put(removeLastResult())
    }
}

export function* startQuizWatcher () {
    yield takeLeading(START_QUIZ_ASYNC, startQuizWorker)
}

export function* endQuizWatcher () {
    yield takeLeading(END_QUIZ_ASYNC, endQuizWorker)
}

export function* addResultWatcher () {
    yield takeEvery(ADD_RESULT_ASYNC, addResultWorker)
}