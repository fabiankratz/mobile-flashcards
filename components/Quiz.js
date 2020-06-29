import React, { useState } from 'react'
import { connect } from 'react-redux'
import {Text, View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { endQuizAsync, startQuizAsync, addResultAsync } from '../actions/quiz'
import { FontAwesome } from '@expo/vector-icons';
import FlipCard from 'react-native-flip-card'
import { Feather } from '@expo/vector-icons';
import {  clearLocalNotification,
    setLocalNotification} from '../utils/notifications'

export const Quiz = ({ navigation, endQuizAsync, startQuizAsync, addResultAsync, currentCard, finished=false, score, title, cardsRemaining=0 }) => {
    const [isFlipped, setFlipped] = useState(false)
    if (finished) {
        return (
            <View style={styles["container"]}>
                <Text style={styles["performance"]}>
                    Here is how you performed:
                </Text>
                <Text style={{color: "#393", fontWeight: "bold", fontSize: 30}}>
                    {score} 
                </Text>
                <View style={[styles["buttons-container"], {paddingHorizontal: 30}]}>
                    <TouchableOpacity
                        style={{backgroundColor: "#23f", width: "50%", alignItems: "center", paddingVertical: 10}}
                        onPress={() => {
                            endQuizAsync()
                            clearLocalNotification()
                                .then(setLocalNotification)
                            startQuizAsync(title)
                        }}
                    >
                        <Text style={{color: "white", fontSize: 20, textAlign: "center"}}>
                            Try again!
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor: "#a12", width: "50%", alignItems: "center", paddingVertical: 10}}
                        onPress={() => {
                            endQuizAsync()
                            clearLocalNotification()
                                .then(setLocalNotification)
                            navigation.goBack()
                        }}
                    >
                        <Text style={{color: "white", fontSize: 20, textAlign: "center"}}>
                            Go Back
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles["container"]}>
                <Text style={styles["score"]}>
                    Remaining: {cardsRemaining} Card{cardsRemaining !== 1 && 's'}
                </Text>
                <TouchableWithoutFeedback
                    onPress={() => setFlipped(!isFlipped)}
                >
                    <FlipCard 
                        style={styles["flip-card-container"]}
                        friction={6}
                        perspective={1000}
                        flipHorizontal={true}
                        flipVertical={false}
                        flip={isFlipped}
                        clickable={false}
                    >
                        <View style={styles["flip-card"]}>
                            <View style={styles["flip-card__title"]}>
                                <Text style={{fontSize: 20}}>
                                    Question
                                </Text>
                                <View style={styles["title__icon"]}>
                                    <FontAwesome name="question-circle" size={24} color="#ebc636"/>
                                </View>
                            </View>
                            <Text style={styles["flip-card__text"]}>
                                {currentCard?.question}
                            </Text>
                        </View>
                        <View style={styles["flip-card"]}>
                            <View style={styles["flip-card__title"]}>
                                <Text style={{fontSize: 20}}>
                                    Answer
                                </Text>
                                <View style={styles["title__icon"]}>
                                    <FontAwesome name="exclamation-circle" size={24} color="#33b1f5" />
                                </View>
                            </View>
                            <Text style={styles["flip-card__text"]}>
                                {currentCard?.answer}
                            </Text>
                        </View>
                    </FlipCard>
                </TouchableWithoutFeedback>
                <View style={styles["buttons-container"]}>
                    <TouchableOpacity
                        style={{backgroundColor: "green", width: "50%", alignItems: "center"}}
                        onPress={() => {
                            setFlipped(false)
                            addResultAsync(true)
                        }}
                    >
                        <Feather name="check" size={100} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor: "red", width: "50%", alignItems: "center"}}
                        onPress={() => {
                            setFlipped(false)
                            addResultAsync(false)
                        }}
                    >
                        <Feather name="x" size={100} color="white" />
                    </TouchableOpacity>
                </View>
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
    const cardsRemaining = numCards - numAnswered
    props.cardsRemaining = cardsRemaining
    if (numCards && cardsRemaining) {
        props.currentCard = decks[route.params.title].cards[numAnswered]
    } else {
        props.finished = true
    }
    props.score = `You got ${quiz.results?.reduce((acc, result) => acc + (result ? 1 : 0), 0) || 0} / ${numAnswered} correct.`
    props.title = route.params.title
    return props
}

const mapDispatchToProps = {
    endQuizAsync,
    startQuizAsync,
    addResultAsync
}

const styles = StyleSheet.create({
    "container": {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    "score": {
        paddingVertical: 20,
        width: "100%",
        textAlign: "center",
        backgroundColor: "#d69600",
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    "flip-card": {
        width: 300,
        height: 300,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20,
        backfaceVisibility: "hidden",
    },
    "flip-card__title": {
        flexDirection: "row",
        backfaceVisibility: "hidden",
    },
    "flip-card__text": {
        textAlign: "center",
        marginTop: 20,
        backfaceVisibility: "hidden",
    },
    "title__icon": {
        marginLeft: 10,
        marginTop: 2,
    },
    "flip-card-container": {
        marginTop: 30,
    },
    "buttons-container": {
        marginTop: 30,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
    },
    "performance": {
        marginHorizontal: 60,
        fontSize: 20,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
