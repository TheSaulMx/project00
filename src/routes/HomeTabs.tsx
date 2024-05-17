import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import { TabBarIconMappings } from '../utils/bottomTabBarIconMapping';
import { ParamListBase, RouteProp, useNavigation } from '@react-navigation/native';
import { HomeHeader } from './HomeHeader';
import { ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMessaging } from '../hooks/useMessaging';

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => ({
  tabBarIcon: ({ focused }: { focused: boolean }) => {
    const { focus, unfocused } = TabBarIconMappings[route.name];
    return <TabBarIcon focused={focused} iconSourceFocused={focus} iconSourceUnfocused={unfocused} />;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  header: ({ options }: { options: any }) => {
    return <HomeHeader />;
  },
});

export function HomeTabs() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { initialRoute, loading, initialNotification } = useMessaging();

  useEffect(() => {
    if (initialNotification) {
      navigation.navigate(initialNotification.data?.navigationId);
    }
  }, [initialNotification, navigation]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName={initialRoute}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
