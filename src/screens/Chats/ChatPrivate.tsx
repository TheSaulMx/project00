import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { ChatTextInput } from './ChatTextInput';

export function ChatPrivate() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.userInfoContainer}>
          <Image source={require('../../assets/images/user/profile-icon-xs.jpg')} style={styles.image} />
          <View style={styles.userInfoTextContainer}>
            <Text style={styles.userName}>NOMBRE DEL USUARIO</Text>
            <Text style={styles.userOcupation}>OCUPACIÓN ACTUAL DEL USUARIO</Text>
          </View>
        </View>
        <Divider style={styles.divider} />
        <Text style={styles.initialDate}>JUL 20, 2022</Text>
      </ScrollView>
      <View style={styles.container2}>
        <ChatTextInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
  },
  container2: {
    // alignSelf: 'flex-end',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  userInfoContainer: {
    margin: 10,
  },
  userInfoTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  userOcupation: {
    fontSize: 12,
    color: 'black',
  },
  divider: {
    backgroundColor: 'gray',
    height: 1,
  },
  initialDate: {
    color: 'black',
    textAlign: 'center',
  },
});
