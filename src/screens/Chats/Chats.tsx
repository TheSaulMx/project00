import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import MessageCard from '../../components/MessageCard/MessageCard';
import { fetchData } from '../../services/getData';
import { ChatsFilter } from './ChatsFilter';

export default function Chats() {
  const [chats, setChats] = useState<any>([]);
  useEffect(() => {
    getMessages();
  }, []);

  async function getMessages() {
    let response = await fetchData('https://freetestapi.com/api/v1/poets?limit=25');
    setChats(response?.data);
  }

  return (
    <View>
      <ChatsFilter />
      <ScrollView style={styles.scrollView}>
        {chats
          ? chats.map((item: any) => (
              <MessageCard key={item.id} user={item.name} message={item.biography} date={item.death_year} />
            ))
          : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 5,
  },
});
