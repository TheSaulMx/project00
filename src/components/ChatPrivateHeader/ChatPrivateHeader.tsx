import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Divider, IconButton, Menu } from 'react-native-paper';

export function ChatPrivateHeader() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <IconButton icon={'arrow-left'} size={25} onPress={() => navigation.goBack()} />
      <View style={styles.userInfoContainer}>
        <Text style={styles.text}>NOMBRE DEL USUARIO</Text>
        <Text style={styles.text}>ULTIMA CONEXIÓN</Text>
      </View>
      <View style={styles.actionButtons}>
        <IconButton icon={'video-plus'} />
        <IconButton icon={'star-outline'} />
        <IconButton icon={'dots-vertical'} onPress={() => setMenuVisible(!menuVisible)} />
      </View>
      <View style={styles.menuContainer}>
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(!menuVisible)}
          anchor={<Button onPress={() => setMenuVisible(!menuVisible)}>Show menu</Button>}
          style={styles.cont}
          contentStyle={styles.menuContainerStyle}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#fff',
  },
  userInfoContainer: {
    width: '50%',
  },
  text: {
    color: 'black',
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
  menuContainerStyle: {
    backgroundColor: '#fff',
  },
  cont: {
    marginTop: 50,
  },
});
