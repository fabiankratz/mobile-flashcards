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
            <Stack.Screen name="DeckDetails" component={DeckDetails} options={({route}) => ({title: "Details: " + route.params.title})}/>
            <Stack.Screen name="AddDeck" component={AddDeck} options={({route}) => ({title: "Add deck"})}/>
            <Stack.Screen name="AddCard" component={AddCard} options={({route}) => ({title: "Add Card to: " + route.params.title})}/>
            <Stack.Screen name="Quiz" component={Quiz} options={({route}) => ({title: "Quiz: " + route.params.title})}/>
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

