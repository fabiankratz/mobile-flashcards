import cards from './cards'
import { SET_LOCAL_DATA, ADD_CARD } from '../actions'

export default (state = {}, { type, payload }) => {
    switch (type) {
        case SET_LOCAL_DATA:
            return {
                ...state,
                ...payload
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
