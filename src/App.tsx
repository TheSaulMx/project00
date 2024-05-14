import Routes from './navigation';
import { AuthProvider } from './contexts/auth';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
