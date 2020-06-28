import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadLocalDataAsync } from '../actions/shared'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import DeckDetails from './DeckDetails'

const Stack = createStackNavigator()

export const Main = (props) => {
    const {loadLocalDataAsync}  = props
    useEffect(() => {
        loadLocalDataAsync()
    }, [loadLocalDataAsync])
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DeckDetails" component={DeckDetails} />
        </Stack.Navigator>
    )
}

Main.propTypes = {

}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = {
    loadLocalDataAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

