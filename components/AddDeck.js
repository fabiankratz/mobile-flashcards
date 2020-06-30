import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { saveDeckTitleAsync } from '../actions/decks'
import EmojiBoard from 'react-native-emoji-board'

export const AddDeck = (props) => {
    const [title, onChangeTitle] = useState('');
    const [focus, setFocus] = useState(false)
    const [showEmojiBoard, setEmojiBoardVisibility] = useState(false)
    const [emoji, setEmoji] = useState('📚')
    const color = '#34f'
    const { saveDeckTitleAsync, navigation } = props
    return (
        <View style={{flex: 1}}>
            <View style={styles["container"]}>
                <TextInput
                    placeholder="e.g. Spanish Vocabulary"
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    style={[styles["textinput"], focus && styles["--bb-green"]]}
                    onChangeText={text => onChangeTitle(text)}
                    value={title}
                />
                <TouchableOpacity
                    onPress={() => setEmojiBoardVisibility(true)}
                    onBlur={() => setEmojiBoardVisibility(false)}

                >
                    <Text style={{fontSize: 20, marginTop: 20, color: "blue"}}>
                        Select an emoji: {emoji}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles["button"]}
                    onPress={() => {
                        saveDeckTitleAsync({title, emoji, color})
                        navigation.navigate('DeckDetails', {title})
                    }}
                >
                    <Text style={{color: "white", textAlign: "center"}}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
            <EmojiBoard 
                showBoard={showEmojiBoard} 
                onClick={({code}) => {
                    setEmoji(code)
                    setEmojiBoardVisibility(false)
                }} 
                containerStyle={{alignSelf: "flex-end"}}
            />
        </View>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    saveDeckTitleAsync
}

const styles = StyleSheet.create({
    "container": {
        //flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 50,
    },
    "textinput": {
        backgroundColor: "white",
        width: 300,
        height: 50,
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
})

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)
