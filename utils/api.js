import { AsyncStorage } from 'react-native'

const APP_STORE_KEY = '@mobile-flashcards:decks'

export default deviceStorage = {
    getDecks: async function () {
        const result = await AsyncStorage.getItem(APP_STORE_KEY)
        return result !== null ? JSON.parse(result) : {}
    },
    saveDeckTitle: async function (title) {
        await AsyncStorage.mergeItem(
            APP_STORE_KEY,
            JSON.stringify({ [title]: {title, questions: []} })
        )
    },
    getDeck: async function (title) {
        const result = await AsyncStorage.getItem(APP_STORE_KEY)
        return result !== null && JSON.parse(result)[title]
    },
    addCardToDeck: async function (title, card) {
        const deck = await this.getDeck(title)
        if (deck) {
            deck.questions.push(card)
            await AsyncStorage.mergeItem(
                APP_STORE_KEY,
                JSON.stringify(deck)
            )
        }
    }
}