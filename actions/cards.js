import { ADD_CARD } from './'

export function addCardToDeck (title, card) {
    return {
        type: ADD_CARD,
        payload: {
            title,
            card
        }
    }
}