import { useEffect, useState } from 'react';
import * as apiService from '../../../services/api';
import { ActivityIndicator, PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface ChildProps {
  signed: boolean;
}
interface Message {
  id: number;
  quote: string;
  author: string;
}

export default function Warning({ params, setUserAccepted }: { params: any; setUserAccepted: any }) {
  const [messageData, setMessageData] = useState<Message | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handlePress = () => {
    setUserAccepted(true);
    if (!params.signed) {
      navigation.navigate('SignIn');
    }
  };

  const getPermission = async () => {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can receive notifications');
    } else {
      console.log('You can`t receive notifications');
    }
  };

  useEffect(() => {
    getData();
    getPermission();
  }, [params]);

  async function getData() {
    try {
      const response = await apiService.get('https://dummyjson.com/quotes/1');
      if (response) {
        setMessageData(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.imageBackground}>
      {!isLoading ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{messageData?.quote}</Text>
          <Button style={styles.button} labelStyle={styles.buttonText} onPress={handlePress}>
            Enterado
          </Button>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: '#d1d1d1',
  },
  imageStyle: {
    opacity: 0.8,
  },
  messageContainer: {
    alignContent: 'center',
    marginTop: '50%',
    marginHorizontal: '10%',
  },
  message: {
    fontSize: 24,
    color: '#000',
  },
  button: {
    backgroundColor: '#4DB6FF',
    marginVertical: 15,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
