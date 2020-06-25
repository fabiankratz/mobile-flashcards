import { AsyncStorage } from 'react-native'

const APP_STORE_KEY = '@mobile-flashcards:'

export default deviceStorage = {
    getData: async function () {
        const result = await AsyncStorage.getItem(APP_STORE_KEY)
        return result !== null && JSON.parse(result)
    },
    saveDeckTitle: async function (title) {
        await AsyncStorage.mergeItem(
            APP_STORE_KEY + 'decks',
            JSON.stringify({ [title]: {title, questions: []} })
        )
    },
    getDeck: async function (title) {
        const result = await AsyncStorage.getItem(APP_STORE_KEY + 'decks')
        return result !== null && JSON.parse(result)[title]
    },
    addCardToDeck: async function (title, card) {
        const deck = await this.getDeck(title)
        if (deck) {
            deck.questions.push(card)
            await AsyncStorage.mergeItem(
                APP_STORE_KEY + 'decks',
                JSON.stringify({[title]: deck})
            )
        }
    },
    addResult: async function (res) {
        const quiz = await this.getQuiz()
        if (quiz) {
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
            return null
        }
    },
    startQuiz: async function (title) {
        await AsyncStorage.mergeItem(
            APP_STORE_KEY + 'quiz',
            JSON.parse({title})
        )
    },
    endQuiz: async function () {
        await AsyncStorage.mergeItem(
            APP_STORE_KEY + 'quiz',
            JSON.parse({title: "", results: []})
        )
    },
    clearDecks: async function () {
        await AsyncStorage.removeItem(APP_STORE_KEY)
    }
}