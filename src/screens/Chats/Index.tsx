import { createStackNavigator } from '@react-navigation/stack';
import { ChatTabsHeader } from '../../routes/ChatTabsHeader';
import { ChatPrivateHeader } from '../../components/ChatPrivateHeader/ChatPrivateHeader';
import Chats from './Chats';
import { ChatPrivate } from './ChatPrivate';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
export function Chat({ route }: { route: any }) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { fromQuitState } = route.params;
  useEffect(() => {
    function handlerAcion() {
      if (fromQuitState) {
        navigation.navigate('Main');
      }
      return true;
    }
    const unsubscribe = BackHandler.addEventListener('hardwareBackPress', handlerAcion);

    return () => {
      unsubscribe.remove();
    };
  }, [fromQuitState, navigation]);
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="ChatPrivate" component={ChatPrivate} />
    </Stack.Navigator>
  );
}
