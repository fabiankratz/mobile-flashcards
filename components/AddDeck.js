import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { saveDeckTitleAsync } from '../actions/decks'

export const AddDeck = (props) => {
    const [value, onChangeText] = React.useState('Deck title');
    const { saveDeckTitleAsync, navigation } = props
    return (
        <View>
            <TextInput
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <TouchableOpacity
                onPress={() => {
                    saveDeckTitleAsync(value)
                    navigation.navigate('Home')
                }}
            >
                <Text>
                    Add Deck
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    saveDeckTitleAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)
