import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

export const Home = (props) => {
    const { navigation, decks } = props
    return (
        <View style={styles["container"]}>
            <ScrollView style={styles["deck-list"]} horizontal={true}>
                { Object.values(decks).map(deck => (
                    <TouchableOpacity 
                        key={deck.title}
                        onPress={() => navigation.navigate('DeckDetails', {title: deck.title})}
                    >
                        <View style={styles["deck-list__deck"]}>
                            <View style={[styles["deck__card"], styles["--pos-abs"], styles["deck__third-card"], {backgroundColor: deck.color, opacity: 0.7}]}></View>
                            <View style={[styles["deck__card"], styles["--pos-abs"], styles["deck__second-card"], {backgroundColor: deck.color, opacity: 0.8}]}></View>
                            <View style={[styles["deck__card"], styles["deck__first-card"], {backgroundColor: deck.color}]}>
                                <Text style={styles["deck__title"]}>
                                    { deck.title }
                                </Text>
                                <Text style={styles["deck__num-cards"]}>
                                {deck.cards?.length || 0} Card{deck.cards?.length !== 1 && "s"}
                                </Text>
                                <Text style={styles["deck__emoji"]}>
                                    {deck.emoji}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <TouchableOpacity 
                style={styles["fab"]}
                onPress={() => navigation.navigate('AddDeck')}
            >
                <View style={styles["fab__content"]}>
                    <Text style={styles["fab__text"]}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = ({ decks }, props) => ({
    decks,
    ...props
})

const mapDispatchToProps = {
    
}

const styles = StyleSheet.create({
    "container": {
      flex: 1,
      position: "relative",
    },
    "fab": {
      position: "absolute",
      bottom: 50,
      right: 50,
      flex: 1,
    },
    "fab__content": {
      borderRadius: 50,
      backgroundColor: "#028",
      width: 70,
      height: 70,
      flex: 1,
    },
    "fab__text": {
      textAlign: "center",
      textAlignVertical: "center",
      flex: 1,
      fontSize: 40,
      color: "#fff",
    },
    "page-title": {
      marginTop: 50,
      marginLeft: 40,
      fontSize: 40,
      fontWeight: "bold",
    },
    "deck-list": {
      position: "absolute",
      marginTop: 20,
      top: 0,
      flex: 1,
    },
    "deck-list__deck": {
      margin: 40,
      position: "relative",
    },
    "deck__card": {
      width: 260,
      height: 400,
      borderRadius: 20,
      padding: 20,
    },
    "--pos-abs": {
      position: "absolute",
    },
    "deck__first-card": {
      backgroundColor: "#283",
    },
    "deck__second-card": {
      transform: [{translateX: 8}, {translateY: 8}],
      backgroundColor: "#263"
    },
    "deck__third-card": {
      transform: [{translateX: 16}, {translateY: 16}],
      backgroundColor: "#243",
      shadowOffset:{  width: 10,  height: 10,  },
      shadowColor: 'black',
      shadowOpacity: 1.0,
    },
    "deck__title": {
      fontSize: 30,
      fontWeight: "bold",
      color: "#fff"
    },
    "deck__num-cards": {
      color: "#fff"
    },
    "deck__emoji": {
      position: "absolute",
      width: 260,
      height: 400,
      fontSize: 100,
      flex: 1,
      textAlignVertical: "center",
      alignSelf: "center",
      textAlign: "center",
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Home)
