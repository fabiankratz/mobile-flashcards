import cards from './cards'
import { LOAD_LOCAL_DATA, ADD_CARD } from '../actions'

export default (state = {}, { type, payload }) => {
    switch (type) {
        case LOAD_LOCAL_DATA:
            if (payload.decks) {
                return payload.decks
            } else {
                return state
            }
        case ADD_CARD:
            return {
                ...state,
                [payload.title]: {
                    ...state[payload.title],
                    questions: cards(
                        state[payload.title].questions,
                        {type: ADD_CARD, payload: {card: payload.card}})
                }
            }
        default:
            return state
    }
}
