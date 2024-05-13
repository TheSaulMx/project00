import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MessageCardAccordeon from '../../utils/messageCardAccordeon';
import moment from 'moment';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function MessageCard({ user, message, date }: { user: string; message: string; date: number }) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  function goToChat() {
    try {
      navigation.navigate('ChatPrivate');
    } catch (error) {
      throw new Error(error as string);
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => goToChat()}>
      <Image style={styles.image} source={require('../../assets/images/user/profile-icon-xs.jpg')} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{user}</Text>
        <MessageCardAccordeon text={message} sliceLong={50}>
          <Text style={styles.text}>{message}</Text>
        </MessageCardAccordeon>
      </View>
      <Text style={styles.date}>{moment([date]).fromNow()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    padding: 6,
    height: 70,
    backgroundColor: '#fff',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    paddingLeft: 6,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  userName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  text: {
    color: 'black',
  },
  date: {
    position: 'absolute',
    color: 'black',
    right: 6,
  },
});
