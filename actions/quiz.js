import { START_QUIZ, END_QUIZ, ADD_RESULT, START_QUIZ_ASYNC, END_QUIZ_ASYNC, ADD_RESULT_ASYNC, REMOVE_LAST_RESULT } from './'

export function startQuiz (title) {
    return {
        type: START_QUIZ,
        payload: {title}
    }
}

export function endQuiz () {
    return {
        type: END_QUIZ
    }
}

export function addResult (result) {
    return {
        type: ADD_RESULT,
        payload: {result}
    }
}
export function startQuizAsync (title) {
    return {
        type: START_QUIZ_ASYNC,
        payload: {title}
    }
}

export function endQuizAsync () {
    return {
        type: END_QUIZ_ASYNC
    }
}

export function addResultAsync (result) {
    return {
        type: ADD_RESULT_ASYNC,
        payload: {result}
    }
}

export function removeLastResult () {
    return {
        type: REMOVE_LAST_RESULT,
    }
}