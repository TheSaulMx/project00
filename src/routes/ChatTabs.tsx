import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chats from '../screens/Chats/Chats';
import { ChatTabsHeader } from './ChatTabsHeader';
import { ChatPrivate } from '../screens/Chats/ChatPrivate';
import { ChatPrivateHeader } from '../screens/Chats/ChatPrivateHeader';

export function ChatTabs() {
  const Stack = createStackNavigator();

  const screenOptions = ({ route }: { route: any }) => ({
    // eslint-disable-next-line react/no-unstable-nested-components
    header: ({}) => {
      if (route.name === 'Chats') {
        return <ChatTabsHeader />;
      } else {
        return <ChatPrivateHeader />;
      }
    },
  });

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="ChatPrivate" component={ChatPrivate} />
    </Stack.Navigator>
  );
}
