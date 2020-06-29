import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = '@mobile-flashcards:notifications'
  
export function setLocalNotification () {
    console.log("setting notification")
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
        console.log(data)
        if (data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                console.log(status)
                if (status === 'granted') {
                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
        }).catch(console.log)
}
export function clearLocalNotification () {
    console.log("clearing notification")
    console.log(Notifications)
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then()
}