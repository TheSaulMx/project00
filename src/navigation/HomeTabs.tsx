import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import { TabBarIconMappings } from '../utils/bottomTabBarIconMapping';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { HomeHeader } from './HomeHeader';

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
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="HomeMain" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
