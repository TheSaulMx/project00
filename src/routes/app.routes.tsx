import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import { TabBarIconMappings } from '../utils/bottomTabBarIconMapping';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { useMessaging } from '../hooks/useMessaging';
import { HomeHeader } from '../components/HomeHeader/HomeHeader';
import { Chat } from '../screens/Chats/Index';

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => ({
  tabBarIcon: ({ focused }: { focused: boolean }) => {
    const { focus, unfocused } = TabBarIconMappings[route.name] || {};
    return <TabBarIcon focused={focused} iconSourceFocused={focus} iconSourceUnfocused={unfocused} />;
  },
  tabBarButton: ['Chat'].includes(route.name)
    ? () => {
        return null;
      }
    : undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  header: ({ options }: { options: any }) => {
    return <HomeHeader />;
  },
});

export function AppRoutes() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { initialRoute, loading, initialNotification } = useMessaging();

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName={initialRoute}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
