import cards from './cards'
import { LOAD_LOCAL_DATA, ADD_CARD, SAVE_DECK_TITLE, REMOVE_DECK_TITLE, REMOVE_LAST_CARD } from '../actions'

export default (state = {}, { type, payload }) => {
    switch (type) {
        case LOAD_LOCAL_DATA:
            if (payload.decks) {
                return payload.decks
            } else {
                return state
            }
        case SAVE_DECK_TITLE:
            return {
                ...state,
                [payload.title]: {
                    title: payload.title,
                }
            }
        case REMOVE_DECK_TITLE: 
            const {[payload.title]: value, ...rest } = state
            return rest
        case REMOVE_LAST_CARD:
            return {
                ...state,
                [payload.title]: {
                    ...state[payload.title],
                    cards: cards(
                        state[payload.title].cards,
                        {type: REMOVE_LAST_CARD}
                    )
                }
            }
        case ADD_CARD:
            return {
                ...state,
                [payload.title]: {
                    ...state[payload.title],
                    cards: cards(
                        state[payload.title].cards,
                        {type: ADD_CARD, payload: {card: payload.card}})
                }
            }
        default:
            return state
    }
}
