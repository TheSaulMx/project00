import { PropsWithChildren, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function TextAccordion({
  children,
  text,
  sliceLong,
}: PropsWithChildren<{ children?: any; text: string; sliceLong: number }>) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <View style={styles.content}>
        {!expanded ? <Text style={styles.text}>{text.slice(0, sliceLong)}</Text> : null}
        {!expanded && (
          <Button style={styles.button} onPress={() => setExpanded(true)} mode="text">
            ... más
          </Button>
        )}
      </View>
      {expanded && <View>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    paddingHorizontal: 10,
  },
  button: {
    position: 'absolute',
    right: 0,
    bottom: -10,
  },
  text: {
    color: 'black',
    marginBottom: 15,
  },
});
