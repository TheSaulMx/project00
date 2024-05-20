import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { fetchData } from '../../services/getData';
import PostCard from '../../components/PostCard/PostCard';
import { ActivityIndicator } from 'react-native-paper';

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const posts = await fetchData('https://freetestapi.com/api/v1/posts?limit=5');
      setData(posts);
      setIsLoading(false);
    } catch (error) {
      throw new Error(`ocurrio un error en el fetch de los posts: , ${error}`);
    }
  }

  return (
    <ScrollView style={styles.container}>
      {!isLoading ? (
        <View>
          {data
            ? data.data.map((d: any) => (
                <PostCard key={d.id} body={d.content} user={d.author} timestamp={d.timestamp} />
              ))
            : null}
        </View>
      ) : (
        <ActivityIndicator animating={true} color="purple" size="large" style={styles.activityIndicator} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d2d2d2',
  },
  title: {
    color: 'black',
  },
  activityIndicator: {
    display: 'flex',
    marginTop: '50%',
  },
});
