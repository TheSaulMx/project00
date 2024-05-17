import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './utils/rootNavigation';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
