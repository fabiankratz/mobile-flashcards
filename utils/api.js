import { AsyncStorage } from 'react-native'

const APP_STORE_KEY = '@mobile-flashcards:decks'

export default deviceStorage = {
    getDecks: async function () {
        try {
            const result = await AsyncStorage.getItem(APP_STORE_KEY)
            return result !== null && JSON.parse(result)
        } catch (e) {
            console.log(e)
        }
    },
    saveDeckTitle: async function (title) {
        try {
            await AsyncStorage.mergeItem(
                APP_STORE_KEY,
                JSON.stringify({ [title]: {} })
            )
        } catch (e) {
            console.log(e)
        }
    },
    getDeck: async function (title) {
        try {
            const result = await AsyncStorage.getItem(APP_STORE_KEY)
            return result !== null && JSON.parse(result)[id]
        } catch (e) {
            console.log(e)
        }
    },
    addCardToDeck: async function (title, card) {
        try {
            const result = await getDeck(title)
            if (result !== null) {
                const deck = JSON.parse(result)
                deck.questions.push(card)
                await AsyncStorage.mergeItem(
                    APP_STORE_KEY,
                    JSON.stringify(deck)
                )
            }
        } catch (e) {
            console.log(e)
        }
    }
}