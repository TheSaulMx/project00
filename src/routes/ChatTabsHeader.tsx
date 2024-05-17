import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';

export const ChatTabsHeader = () => {
  const [search, setSearch] = useState<string>('');
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <IconButton icon={'arrow-left'} size={25} onPress={() => navigation.goBack()} />
      <Searchbar
        placeholder="Buscar"
        value={search}
        onChangeText={setSearch}
        inputStyle={styles.inputSearch}
        style={styles.inputSearchContainer}
      />
      <IconButton size={25} icon="dots-vertical" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  inputSearch: {
    height: 30,
    alignSelf: 'center',
  },
  inputSearchContainer: {
    flex: 1,
    height: 30,
    borderRadius: 0,
    paddingLeft: 0,
    backgroundColor: '#d2d2d2',
  },
  inputSearchLeftIcon: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
  },
});
