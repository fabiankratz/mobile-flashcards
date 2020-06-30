import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { saveDeckTitleAsync } from '../actions/decks'
import EmojiBoard from 'react-native-emoji-board'
import ColorPalette from 'react-native-color-palette'
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const AddDeck = (props) => {
    const [title, onChangeTitle] = useState('');
    const [focus, setFocus] = useState(false)
    const [showEmojiBoard, setEmojiBoardVisibility] = useState(false)
    const [emoji, setEmoji] = useState('📚')
    const [color, setColor] = useState('#000000')
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
                    <Text style={{fontSize: 20, marginTop: 20}}>
                        Select an emoji: {emoji}
                    </Text>
                </TouchableOpacity>
                <ColorPalette
                    titleStyles={{marginTop: 20, fontSize: 20, color}}
                    paletteStyles={{marginTop: 10}}
                    onChange={color => setColor(color)}
                    value={color}
                    colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
                    title={"Choose a color:"}
                    icon={
                        <MaterialCommunityIcons name="circle" size={24} color={color} />
                    }
                /> 
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
