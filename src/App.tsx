import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './utils/rootNavigation';
import { useRef } from 'react';

const App = () => {
  const routeNameRef = useRef<string | undefined>();

  return (
    <AuthProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.getCurrentRoute()?.name;
        }}
        onStateChange={async () => {
          const previusRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.getCurrentRoute()?.name;
          const trackScreenView = async (currentRoute: any) => {
            console.log('current Route Name: ', currentRoute);
          };
          if (previusRouteName !== currentRouteName) {
            // Save the current route name for later comparison
            routeNameRef.current = currentRouteName;
            // Replace the line below to add the tracker from a mobile analytics SDK
            await trackScreenView(currentRouteName);
          }
        }}>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
