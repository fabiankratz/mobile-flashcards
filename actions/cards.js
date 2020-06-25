import { ADD_CARD } from './'
import { REMOVE_LAST_CARD } from './'

export function addCard (title, card) {
    return {
        type: ADD_CARD,
        payload: {
            title,
            card
        }
    }
}

export function removeLastCard (title) {
    return {
        type: REMOVE_LAST_CARD,
        payload: {title}
    }
}