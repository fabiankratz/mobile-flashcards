import { LOAD_LOCAL_DATA, LOAD_LOCAL_DATA_ASYNC } from './'

export function loadLocalData (data) {
    return {
        type: LOAD_LOCAL_DATA,
        payload: data
    }
}

export function loadLocalDataAsync () {
    return {
        type: LOAD_LOCAL_DATA_ASYNC
    }
}