import { AsyncStorage } from 'react-native'
import * as Notifications from 'expo-notifications';


const NOTIFICATION_KEY = '@mobile-flashcards:notifications'
  
export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Notifications.requestPermissionsAsync().then(({status}) => {
                    if (status === "granted") {
                        Notifications.cancelAllScheduledNotificationsAsync().then(() => {
                            Notifications.scheduleNotificationAsync({
                                content: {
                                    title: "Improve your memory!",
                                    body: "Don't forget to complete a quiz today!"
                                },
                                trigger: {
                                    seconds: 60 * 60 * 24,
                                    repeats: true,
                                }
                            })
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        })
                    }
                })
            }
        }).catch(console.log)
}
export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}