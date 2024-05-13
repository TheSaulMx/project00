import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';

const screenWidth = Dimensions.get('screen').width;

export function ChatTextInput() {
  return (
    <View style={styles.container}>
      <IconButton icon={'plus'} />
      <TextInput
        style={styles.textInput}
        multiline
        contentStyle={styles.textInputContainer}
        outlineStyle={styles.outlineStyle}
        activeUnderlineColor="gray"
      />
      <IconButton icon={'microphone'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    width: screenWidth,
    paddingVertical: 10,
    alignItems: 'flex-end',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#d2d2d2',
    margin: 0,
  },
  textInputContainer: {
    paddingVertical: 0,
  },
  outlineStyle: {
    borderRadius: 20,
  },
});
