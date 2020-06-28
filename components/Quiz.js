import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Text, View, TouchableOpacity } from 'react-native'
import { endQuizAsync, startQuizAsync, addResultAsync } from '../actions/quiz'

export const Quiz = ({ endQuizAsync, startQuizAsync, addResultAsync, currentCard, finished=false, score, title }) => {
    if (finished) {
        return (
            <View>
                <Text>Here is how you performed: {score} </Text>
                <TouchableOpacity
                    onPress={() => {
                        endQuizAsync()
                        startQuizAsync(title)
                    }}
                >
                    <Text>
                        Try again!
                    </Text>
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <View>
                <Text>
                    Score: {score}
                </Text>
                <Text>
                    Question: {currentCard.question}
                </Text>
                <Text>
                    Answer: {currentCard.answer}
                </Text>
                <TouchableOpacity
                    onPress={() => addResultAsync(true)}
                >
                    <Text>
                        Correct!
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => addResultAsync(false)}
                >
                    <Text>
                        Wrong!
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = ({ decks, quiz }, { route, navigation }) => {
    const props = {
        navigation,
    }
    const numAnswered = quiz.results?.length || 0
    const numCards = decks[route.params.title].cards.length
    if (numCards !== 0 && numAnswered !== numCards) {
        props.currentCard = decks[route.params.title].cards[numAnswered]
    } else {
        props.finished = true
    }
    props.score = `${quiz.results?.reduce((acc, result) => acc + (result ? 1 : 0), 0) || 0} / ${numAnswered} (${numCards} cards)`
    props.title = route.params.title
    return props
}

const mapDispatchToProps = {
    endQuizAsync,
    startQuizAsync,
    addResultAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
