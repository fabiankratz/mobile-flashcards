import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadLocalDataAsync } from '../actions/shared'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'
import DeckDetails from './DeckDetails'
import AddDeck from './AddDeck'
import Quiz from './Quiz'
import AddCard from './AddCard'

const Stack = createStackNavigator()

export const Main = ({loading, loadLocalDataAsync}) => {
    useEffect(() => {
        loadLocalDataAsync()
    }, [loadLocalDataAsync])
    if (loading) return null
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DeckDetails" component={DeckDetails} />
            <Stack.Screen name="AddDeck" component={AddDeck} />
            <Stack.Screen name="AddCard" component={AddCard} />
            <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
    )
}

Main.propTypes = {

}

const mapStateToProps = ({loading}) => ({
    loading
})

const mapDispatchToProps = {
    loadLocalDataAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

