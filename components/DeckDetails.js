import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { startQuizAsync } from '../actions/quiz'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const DeckDetails = (props) => {
    const { route, navigation, startQuizAsync, decks } = props
    return (
        <View style={styles["container"]}>
            <TouchableOpacity
                style={[styles["button"], {backgroundColor: "#d69600"}]}
                onPress={() => {
                    startQuizAsync(route.params.title)
                    navigation.navigate("Quiz", {title: route.params.title})
                }}
                disabled={!decks[route.params.title].cards?.length}
            >
                <MaterialCommunityIcons name="comment-question" size={100} color="#facb2f" />
                <Text style={styles["button__text"]}>
                    Start Quiz
                </Text>
                <Text style={{color: "white"}}>
                    ({decks[route.params.title]?.cards?.length || 0} Card{decks[route.params.title]?.cards?.length !== 1 && "s"})
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles["button"], {backgroundColor: "#45f"}]}
                onPress={() => {
                    navigation.navigate("AddCard", {title: route.params.title})
                }}
            >
                <MaterialIcons name="add-box" size={100} color="#aaf" />
                <Text style={styles["button__text"]}>
                    Add Question
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = ({decks}, props) => ({
    decks,
    ...props
})

const mapDispatchToProps = {
    startQuizAsync
}

const styles = StyleSheet.create({
    "container": {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    "button": {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch"
    },
    "button__text": {
        fontSize: 30,
        color: "white",
        fontFamily: ""
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetails)
