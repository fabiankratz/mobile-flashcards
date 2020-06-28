import { AsyncStorage } from 'react-native'

const APP_STORE_KEY = '@mobile-flashcards:'

export default deviceStorage = {
    getData: async function () {
        const quiz = await this.getQuiz()
        const decks = await this.getDecks()
        return {quiz, decks}
    },
    getDecks: async function () {
        const result = await AsyncStorage.getItem(APP_STORE_KEY + 'decks')
        return result !== null ? JSON.parse(result) : {}
    },
    saveDeckTitle: async function (title) {
        await AsyncStorage.mergeItem(
            APP_STORE_KEY + 'decks',
            JSON.stringify({ [title]: {title} })
        )
    },
    getDeck: async function (title) {
        const result = await AsyncStorage.getItem(APP_STORE_KEY + 'decks')
        return result !== null ? JSON.parse(result)[title] : {}
    },
    addCardToDeck: async function (title, card) {
        const deck = await this.getDeck(title)
        if (deck) {
            if (!(deck.cards instanceof Array)) {
                deck.cards = []
            }
            deck.cards.push(card)
            await AsyncStorage.mergeItem(
                APP_STORE_KEY + 'decks',
                JSON.stringify({[title]: deck})
            )
        }
    },
    addResult: async function (res) {
        const quiz = await this.getQuiz()
        if (quiz) {
            if (!(quiz.results instanceof Array)) {
                quiz.results = []
            }
            quiz.results.push(res)
            await AsyncStorage.mergeItem(
                APP_STORE_KEY + 'quiz',
                JSON.stringify(quiz)
            )
        }
    },
    getQuiz: async function () {
        const result = await AsyncStorage.getItem(APP_STORE_KEY + 'quiz')
        if (result !== null) {
            return JSON.parse(result)
        } else {
            return {}
        }
    },
    startQuiz: async function (title) {
        await AsyncStorage.mergeItem(
            APP_STORE_KEY + 'quiz',
            JSON.stringify({title})
        )
    },
    endQuiz: async function () {
        await AsyncStorage.mergeItem(
            APP_STORE_KEY + 'quiz',
            JSON.stringify({title: "", results: []})
        )
    },
    clearDecks: async function () {
        await AsyncStorage.removeItem(APP_STORE_KEY)
    }
}