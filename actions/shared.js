import { LOAD_LOCAL_DATA, SET_LOCAL_DATA } from './'

export function setLocalData (data) {
    return {
        type: SET_LOCAL_DATA,
        payload: data
    }
}

export function loadLocalData () {
    return {
        type: LOAD_LOCAL_DATA
    }
}