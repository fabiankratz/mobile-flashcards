import { SAVE_DECK_TITLE, REMOVE_DECK_TITLE, SAVE_DECK_TITLE_ASYNC } from './'

export function saveDeckTitle (title) {
    return {
        type: SAVE_DECK_TITLE,
        payload: {
            title
        }
    }
}

export function saveDeckTitleAsync (title) {
    return {
        type: SAVE_DECK_TITLE_ASYNC,
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