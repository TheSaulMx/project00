import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/login/SignIn/SignIn';
import Warning from '../screens/login/Warning/Warning';
import { ParamListBase, RouteProp } from '@react-navigation/native';

const AuthStack = createStackNavigator();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => ({
  header: () => {
    return undefined;
  },
});

function AuthRoutes({ params, ejecutarFuncionPadre }: { params: any; ejecutarFuncionPadre: any }) {
  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name="Warning">
        {() => <Warning params={params} ejecutarFuncionPadre={ejecutarFuncionPadre} />}
      </AuthStack.Screen>
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
