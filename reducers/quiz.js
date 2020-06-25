import { START_QUIZ, ADD_RESULT } from '../actions'

const initialState = {
    title: "",
    results: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case START_QUIZ:
            return {
                title: payload.title,
                results: []
            }
        case ADD_RESULT:
            return {
                ...state,
                results: [...state.results, payload.result]
            }
        default:
            return state
    }
}
