import deviceStorage from '../utils/api'
import { SAVE_DECK_TITLE } from './'

function saveDeckTitle (title) {
    return {
        type: SAVE_DECK_TITLE,
        payload: {
            title
        }
    }
}

export function handleSaveDeckTitle (title) {
    return (dispatch, getState) => {
        deviceStorage.saveDeckTitle(title).then(() => {
            dispatch(saveDeckTitle(title))
        }).catch(e => {
            console.log(e)
        })
    }
}