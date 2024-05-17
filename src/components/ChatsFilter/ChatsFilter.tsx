import { ScrollView, StyleSheet } from 'react-native';
import { Button, Divider } from 'react-native-paper';

export const ChatsFilter = () => {
  return (
    <ScrollView contentContainerStyle={styles.ScrollViewContainer} horizontal>
      <Button style={styles.buttonDropDown} labelStyle={styles.label} mode="outlined" icon={'menu-down'}>
        Focused
      </Button>
      <Divider style={styles.divider} horizontalInset={true} bold />
      <Button style={styles.button} labelStyle={styles.label} mode="outlined">
        Unread
      </Button>
      <Button style={styles.button} labelStyle={styles.label} mode="outlined">
        Drafts
      </Button>
      <Button style={styles.button} labelStyle={styles.label} mode="outlined">
        InMail
      </Button>
      <Button style={styles.button} labelStyle={styles.label} mode="outlined">
        All filters
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScrollViewContainer: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 0,
    backgroundColor: '#fff',
  },
  divider: {
    backgroundColor: 'gray',
    width: 5,
  },
  buttonDropDown: {
    marginLeft: 10,
    height: 30,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 30,
    minWidth: 70,
    marginRight: 10,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conntetn: {
    height: 30,
  },
  label: {
    height: 20,
  },
});
