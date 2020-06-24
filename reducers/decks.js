import cards from './cards'
import { LOAD_LOCAL_DATA } from '../actions'

export default (state = {}, { type, payload }) => {
    switch (type) {
        case LOAD_LOCAL_DATA:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
