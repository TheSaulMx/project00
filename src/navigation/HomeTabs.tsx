import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import { TabBarIconMappings } from '../utils/bottomTabBarIconMapping';
import { ParamListBase, RouteProp } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => ({
  tabBarIcon: ({ focused }: { focused: boolean }) => {
    const { focus, unfocused } = TabBarIconMappings[route.name];
    return <TabBarIcon focused={focused} iconSourceFocused={focus} iconSourceUnfocused={unfocused} />;
  },
  header: () => {
    return null;
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
