const logger = (store) => (next) => (action) => {
    console.group('ACTION')
    console.log('state (before): ', store.getState())
    console.log('type: ', action.type)
    console.log('payload: ', action.payload)
    const returnValue = next(action)
    console.log('state (after): ', store.getState())
    console.groupEnd()
    return returnValue
}

export default logger