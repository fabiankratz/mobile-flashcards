import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { addCardAsync } from '../actions/cards'

export const AddCard = ({ route, navigation, addCardAsync }) => {
    const [answer, onChangeAnswer] = useState('');
    const [question, onChangeQuestion] = useState('');
    const [questionFocus, setQuestionFocus] = useState(false)
    const [answerFocus, setAnswerFocus] = useState(false)
    return (
        <View style={styles["container"]}>
            <Text style={styles["label"]}>
                Question
            </Text>
            <TextInput
                placeholder="e.g. What's the tallest mountain on earth?"
                onFocus={() => setQuestionFocus(true)}
                onBlur={() => setQuestionFocus(false)}
                style={[styles["textinput"], questionFocus && styles["--bb-green"]]}
                multiline
                numberOfLines={4}
                onChangeText={text => onChangeQuestion(text)}
                value={question}
            />
            <Text style={styles["label"]}>
                Answer
            </Text>
            <TextInput
                placeholder="e.g. Mount Everest"
                onFocus={() => setAnswerFocus(true)}
                onBlur={() => setAnswerFocus(false)}
                selectTextOnFocus
                style={[styles["textinput"], answerFocus && styles["--bb-green"]]}
                multiline
                numberOfLines={4}
                onChangeText={text => onChangeAnswer(text)}
                value={answer}
            />
            <TouchableOpacity
                style={styles["button"]}
                onPress={() => {
                    addCardAsync(route.params.title, {question, answer})
                    navigation.goBack()
                }}
            >
                <Text style={{color: "white", textAlign: "center"}}> 
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    addCardAsync
}

const styles = StyleSheet.create({
    "container": {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 50,
    },
    "textinput": {
        backgroundColor: "white",
        width: 300,
        height: 100,
        textAlignVertical: "top",
        borderBottomColor: "grey",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: 2,
    },
    "--bb-green": {
        borderBottomColor: "green",
    },
    "button": {
        marginVertical: 30,
        alignSelf: "flex-end",
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 150,
        backgroundColor: "#37f"
    },
    "label": {
        alignSelf: "flex-start",
        paddingVertical: 10,
        fontWeight: "bold",
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
