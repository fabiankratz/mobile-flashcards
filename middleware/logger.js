const logger = (store) => (next) => (action) => {
    console.group('ACTION')
    console.log('store (before): ', store)
    console.log('type: ', action.type)
    console.log('payload: ', action.payload)
    const returnValue = next(action)
    console.log('store (after): ', store.getState())
    console.groupEnd()
    return returnValue
}

export default logger