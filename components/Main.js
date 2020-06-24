import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleLoadLocalData } from '../actions/shared'
import { handleSaveDeckTitle } from '../actions/decks'

export const Main = (props) => {
    const {loadLocalData, saveDeckTitle} = props
    useEffect(() => {
        saveDeckTitle("test")
        loadLocalData()
    }, [loadLocalData, saveDeckTitle])
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

const mapDispatchToProps = dispatch => ({
    loadLocalData: () => dispatch(handleLoadLocalData()),
    saveDeckTitle: (title) => dispatch(handleSaveDeckTitle(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
