import { createStackNavigator } from '@react-navigation/stack';
import Chats from '../screens/Chats/Chats';
import { ChatTabsHeader } from './ChatTabsHeader';
import { ChatPrivate } from '../screens/Chats/ChatPrivate';
import { ChatPrivateHeader } from '../components/ChatPrivateHeader/ChatPrivateHeader';

export function ChatTabs() {
  const Stack = createStackNavigator();

  const screenOptions = ({ route }: { route: any }) => ({
    // eslint-disable-next-line react/no-unstable-nested-components
    header: ({}) => {
      if (route.name === 'Chat') {
        return <ChatTabsHeader />;
      } else {
        return <ChatPrivateHeader />;
      }
    },
  });

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Chat" component={Chats} />
      <Stack.Screen name="ChatPrivate" component={ChatPrivate} />
    </Stack.Navigator>
  );
}
