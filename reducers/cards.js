import { ADD_CARD, REMOVE_LAST_CARD} from '../actions'

export default (state = [], { type, payload }) => {
    switch (type) {
        case ADD_CARD:
            return [...state, payload.card]
        case REMOVE_LAST_CARD:
            return state.slice(0, state.length-1)
        default:
            return state
    }
}