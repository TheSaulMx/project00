import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeTabs } from './navigation/HomeTabs';
import { HomeHeader } from './navigation/HomeHeader';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { ChatTabs } from './navigation/ChatTabs';

const Stack = createNativeStackNavigator();

const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => ({
  header: ['Home'].includes(route.name)
    ? // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ options }: { options: any }) => {
        // const title = getHeaderTitle(options, route.name);
        return <HomeHeader />;
      }
    : undefined,
});

const App = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Chat" component={ChatTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default App;
