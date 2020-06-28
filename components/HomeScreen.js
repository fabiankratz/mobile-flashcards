import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'

export const HomeScreen = (props) => {
    const { navigation, decks } = props
    return (
        <View>
            { Object.values(decks).map(deck => (
                <TouchableOpacity 
                    key={deck.title}
                    onPress={() => navigation.navigate('DeckDetails', {title: deck.title})}
                >
                    <Text>
                        { deck.title }
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const mapStateToProps = ({ decks }, props) => ({
    decks,
    ...props
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
