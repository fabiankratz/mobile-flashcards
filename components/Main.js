import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadLocalDataAsync } from '../actions/shared'
import { startQuizAsync, addResultAsync } from '../actions/quiz'

export const Main = (props) => {
    const {loadLocalDataAsync, startQuizAsync, loading, addResultAsync}  = props
    useEffect(() => {
        loadLocalDataAsync()
    }, [loadLocalDataAsync])
    useEffect(() => {
        if (!loading) {
            startQuizAsync("hello")
            addResultAsync(true)
        }
    }, [loading, startQuizAsync, addResultAsync])
    return (
        <Text>
            {JSON.stringify(props)}
        </Text>
    )
}

Main.propTypes = {

}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = {
    loadLocalDataAsync,
    startQuizAsync,
    addResultAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

