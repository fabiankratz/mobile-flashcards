import { ADD_CARD } from '../actions'

export default (state = [], { type, payload }) => {
    switch (type) {
        case ADD_CARD:
            state.push(payload.card)
            return state
        default:
            return state
    }
}
