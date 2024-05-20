import { createStackNavigator } from '@react-navigation/stack';
import { MainRoutes } from './main.routes';
import { useMessaging } from '../hooks/useMessaging';
import { ActivityIndicator } from 'react-native';

const Stack = createStackNavigator();
export function AppRoutes() {
  const { initialRoute, loading } = useMessaging();

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
      <Stack.Screen name="Main" component={MainRoutes} />
    </Stack.Navigator>
  );
}
