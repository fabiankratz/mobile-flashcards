import { SAVE_DECK_TITLE, REMOVE_DECK_TITLE, SAVE_DECK_TITLE_ASYNC } from './'
import { generateName } from '../utils/helpers'

export function saveDeckTitle (deckInfo) {
    return {
        type: SAVE_DECK_TITLE,
        payload: {
            ...deckInfo
        }
    }
}

export function saveDeckTitleAsync (deckInfo) {
    return {
        type: SAVE_DECK_TITLE_ASYNC,
        payload: {
            ...deckInfo,
            title: deckInfo.title || generateName()
        }
    }
}


export function removeDeckTitle (title) {
    return {
        type: REMOVE_DECK_TITLE,
        payload: {title}
    }
}