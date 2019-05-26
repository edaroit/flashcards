import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'RNDFlashcards:notifications'

const createNotification = () => ({
  title: 'Daily Train',
  body: "Don't forget to train your mind",
  ios: { sound: true },
})

const isNotificationNotSet = data => JSON.parse(data) === null

export const setLocalNotification = async () => {
  const data = await AsyncStorage.getItem(NOTIFICATION_KEY)

  if (isNotificationNotSet(data)) {
    const info = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    const { status } = info

    if (status === 'granted') {
      await Notifications.cancelAllScheduledNotificationsAsync()

      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(22)
      tomorrow.setMinutes(0)

      Notifications.scheduleLocalNotificationAsync(createNotification(), {
        time: tomorrow,
        repeat: 'day',
      })

      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
    }
  }
}

export const clearLocalNotification = async () => {
  await AsyncStorage.removeItem(NOTIFICATION_KEY)
  await Notifications.cancelAllScheduledNotificationsAsync()
}
