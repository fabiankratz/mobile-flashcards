import { START_QUIZ, END_QUIZ, ADD_RESULT, LOAD_LOCAL_DATA, REMOVE_LAST_RESULT } from '../actions'

const initialState = {
    title: "",
    results: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_LOCAL_DATA:
            if (payload.quiz) {
                return payload.quiz
            } else {
                return state
            }
        case START_QUIZ:
            return {
                ...state,
                title: payload.title,
            }
        case END_QUIZ:
            return initialState
        case ADD_RESULT:
            return {
                ...state,
                results: [...(state.results || []), payload.result]
            }
        case REMOVE_LAST_RESULT:
            return {
                ...state,
                results: state.results?.slice(0, state.results.length-1) || []
            }
        default:
            return state
    }
}
