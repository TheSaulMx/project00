import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useAuth } from '../../contexts/auth';

export default function Profile() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }
  return (
    <View>
      <Button onPress={handleSignOut}>LogOut</Button>
    </View>
  );
}
