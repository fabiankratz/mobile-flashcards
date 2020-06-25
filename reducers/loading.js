import { START_LOADING, FINISH_LOADING } from '../actions'

const initialState = true

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case START_LOADING:
            return true
        case FINISH_LOADING:
            return false
        default:
            return state
    }
}
