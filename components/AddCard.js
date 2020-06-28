import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { addCardAsync } from '../actions/cards'

export const AddCard = ({ route, navigation, addCardAsync }) => {
    const [answer, onChangeAnswer] = React.useState('type here...');
    const [question, onChangeQuestion] = React.useState('type here...');
    return (
        <View>
            <Text>
                Question:
            </Text>
            <TextInput
                multiline
                numberOfLines={4}
                onChangeText={text => onChangeQuestion(text)}
                value={question}
            />
            <Text>
                Answer:
            </Text>
            <TextInput
                multiline
                numberOfLines={4}
                onChangeText={text => onChangeAnswer(text)}
                value={answer}
            />
            <TouchableOpacity
                onPress={() => {
                    addCardAsync(route.params.title, {question, answer})
                    navigation.goBack()
                }}
            >
                <Text>
                    Submit card
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
