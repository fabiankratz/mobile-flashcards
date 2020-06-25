import { SAVE_DECK_TITLE } from './'

export function saveDeckTitle (title) {
    return {
        type: SAVE_DECK_TITLE,
        payload: {
            title
        }
    }
}