import { createStackNavigator } from '@react-navigation/stack';
import { ChatTabsHeader } from '../../routes/ChatTabsHeader';
import { ChatPrivateHeader } from '../../components/ChatPrivateHeader/ChatPrivateHeader';
import Chats from './Chats';
import { ChatPrivate } from './ChatPrivate';

const Stack = createStackNavigator();
const screenOptions = ({ route }: { route: any }) => ({
  header: ({}) => {
    if (route.name === 'Chat') {
      return <ChatTabsHeader />;
    } else {
      return <ChatPrivateHeader />;
    }
  },
});
export function Chat() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Chat" component={Chats} />
      <Stack.Screen name="ChatPrivate" component={ChatPrivate} />
    </Stack.Navigator>
  );
}
