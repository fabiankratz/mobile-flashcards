import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadLocalDataAsync } from '../actions/shared'
import { startQuizAsync, addResultAsync } from '../actions/quiz'
import { addCardAsync } from '../actions/cards'
import { saveDeckTitleAsync } from '../actions/decks'

export const Main = (props) => {
    const {loadLocalDataAsync, startQuizAsync, loading, addResultAsync, addCardAsync, saveDeckTitleAsync}  = props
    useEffect(() => {
        loadLocalDataAsync()
    }, [loadLocalDataAsync])
    useEffect(() => {
        if (!loading) {
            //startQuizAsync("hello")
            //addResultAsync(true)
            saveDeckTitleAsync("nice")
            //addCardAsync("nice", {question: "nineee", answer: "teeeen"})
        }
    }, [loading, startQuizAsync, addResultAsync, addCardAsync, saveDeckTitleAsync])
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
    addCardAsync,
    saveDeckTitleAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

