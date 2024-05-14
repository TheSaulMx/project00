import { BackHandler, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useAuth } from '../../../contexts/auth';
import { useEffect, useState } from 'react';

export function SignIn() {
  const { signIn } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [exitAppCount, setExitAppCount] = useState(0);
  useEffect(() => {
    const backAction = () => {
      setExitAppCount(exitAppCount + 1);
      if (exitAppCount === 1) {
        BackHandler.exitApp();
        setExitAppCount(0);
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      backHandler.remove();
    };
  }, [exitAppCount]);
  async function handleSigIn() {
    signIn(username, password);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputContainer}>
        <TextInput
          label={'Email adress'}
          value={username}
          onChangeText={setUsername}
          left={<TextInput.Icon icon="email-outline" />}
          style={styles.textInput}
        />
        <TextInput
          label={'Password'}
          secureTextEntry={hidePassword}
          value={password}
          onChangeText={setPassword}
          left={<TextInput.Icon icon="lock-outline" />}
          right={<TextInput.Icon icon="eye" onPress={() => setHidePassword(!hidePassword)} />}
          style={styles.textInput}
        />
      </View>
      <Button style={styles.signInButton} onPress={handleSigIn}>
        SignIn
      </Button>

      <Text style={styles.text}>Don't you have an account?</Text>

      <Button style={styles.registerButton}>Register</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  inputContainer: {
    margin: 30,
  },
  textInput: {
    overflow: 'hidden',
    marginVertical: 10,
    backgroundColor: '#d1d1d1',
    height: 50,
  },
  signInButton: {
    backgroundColor: 'black',
    height: 50,
    marginHorizontal: 30,
    textAlign: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 12,
    marginVertical: 15,
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: '#fff',
    height: 50,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
  },
});
