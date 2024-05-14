import Routes from './navigation';
import { AuthProvider } from './contexts/userAuth';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
