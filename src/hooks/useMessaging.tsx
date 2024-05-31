import { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';

export function useMessaging() {
  const [loading, setLoading] = useState<boolean>(true);
  const [initialRoute, setInitialRoute] = useState<string | undefined>(undefined);
  const [initialNotification, setInitialNotification] = useState<any>();
  const [fromQuitState, setFromQuitState] = useState<boolean>(false);

  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    const unsuscribe = messaging().onNotificationOpenedApp((remoteMessage?) => {
      console.log('Notification caused app to open from background state:', remoteMessage);
      setInitialNotification(remoteMessage);
      if (remoteMessage?.data?.link) {
        setInitialRoute(remoteMessage?.data?.link as string); // e.g. "Settings"
      }
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:', remoteMessage);
          setInitialNotification(remoteMessage);
          setFromQuitState(true);
          if (remoteMessage?.data?.link) {
            setInitialRoute(remoteMessage?.data?.link as string); // e.g. "Settings"
          }
        }
        setLoading(false);
      });

    return () => {
      unsuscribe();
    };
  }, [initialNotification]);

  return { initialRoute, loading, initialNotification, fromQuitState };
}
