import { SAVE_DECK_TITLE, REMOVE_DECK_TITLE } from './'

export function saveDeckTitle (title) {
    return {
        type: SAVE_DECK_TITLE,
        payload: {
            title
        }
    }
}

export function removeDeckTitle (title) {
    return {
        type: REMOVE_DECK_TITLE,
        payload: {title}
    }
}