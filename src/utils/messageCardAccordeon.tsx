import React from 'react';
import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MessageCardAccordeon({
  text,
  sliceLong,
}: PropsWithChildren<{ text: string; sliceLong: number }>) {
  return (
    <View>
      <View style={styles.content}>
        <Text style={styles.text}>{text.slice(0, sliceLong)}</Text>
        {text.length > sliceLong && <Text style={styles.text}>...</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    marginBottom: 15,
  },
});
