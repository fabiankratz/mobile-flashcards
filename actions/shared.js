import deviceStorage from '../utils/api'
import { LOAD_LOCAL_DATA } from './'

function loadLocalData (data) {
    return {
        type: LOAD_LOCAL_DATA,
        payload: data
    }
}

export function handleLoadLocalData() {
    return (dispatch, getState) => {
        deviceStorage.getDecks()
            .then(data => {
                dispatch(loadLocalData(data || {}))
            })
            .catch(e => {
                console.log(e)
            })
    }
}
