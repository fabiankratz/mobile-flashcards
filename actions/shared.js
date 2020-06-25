import { LOAD_LOCAL_DATA, LOAD_LOCAL_DATA_ASYNC, START_LOADING, FINISH_LOADING } from './'

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

export function startLoading () {
    return {
        type: START_LOADING
    }
}

export function finishLoading () {
    return {
        type: FINISH_LOADING
    }
}