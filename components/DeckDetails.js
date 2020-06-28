import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { startQuizAsync } from '../actions/quiz'

export const DeckDetails = (props) => {
    const { route, navigation, startQuizAsync } = props
    return (
        <View>
            <Text>
                { route.params.title }
            </Text>
            <TouchableOpacity
                onPress={() => {
                    startQuizAsync(route.params.title)
                    navigation.navigate("Quiz")
                }}
            >
                <Text>
                    Start Quiz
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("AddCard", {title: route.params.title})
                }}
            >
                <Text>
                    Add Question
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state, props) => ({
    ...props
})

const mapDispatchToProps = {
    startQuizAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetails)
