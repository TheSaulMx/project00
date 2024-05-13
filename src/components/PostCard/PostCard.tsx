import React, { PropsWithChildren } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Card, Icon, IconButton, Text } from 'react-native-paper';
import TextAccordion from '../../utils/textAcordeon';
import moment from 'moment';

interface User {
  // id: number;
  // title: string;
  // content: string;
  user: string;
  timestamp: string;
  // likes: number;
}

const CardHeader: React.FC<User> = ({ user, timestamp }) => {
  return (
    <View style={styles.cardHeader}>
      <Image style={styles.userIcon} source={require('../../assets/images/user/profile-icon.jpg')} />
      <View>
        <Text style={styles.cardHeaderText}>{user}</Text>
        <Text style={styles.cardHeaderText}>DESCRIPCION DEL PUESTO ACTUAL USUARIO</Text>
        <Text style={styles.cardHeaderText}>{moment([timestamp]).fromNow()}</Text>
      </View>
      <Button icon="plus">Seguir</Button>
      <IconButton icon="dots-vertical" size={15} iconColor="gray" style={styles.dotsMenuButton} />
    </View>
  );
};

const FeedActivity = () => {
  return (
    <View style={styles.feedActivity}>
      <View style={styles.feedActivityIcons}>
        <Icon source="account-circle" color="red" size={15} />
        <Icon source="account-circle" color="blue" size={15} />
        <Icon source="account-circle" color="purple" size={15} />
        <Text>452</Text>
      </View>
      <Text>129 comentarios</Text>
    </View>
  );
};

export default function PostCard({
  body,
  user,
  timestamp,
}: PropsWithChildren<{ body: string; user: string; timestamp: string }>) {
  return (
    <Card style={styles.card} contentStyle={styles.cardContent} mode="contained">
      <CardHeader user={user} timestamp={timestamp} />
      <Card.Content style={styles.cardContent}>
        <TextAccordion text={body} sliceLong={100}>
          <Text style={styles.body}>{body}</Text>
        </TextAccordion>
        <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/700' }} />
        <FeedActivity />
        <Card.Actions style={styles.actionsContainer}>
          <Button icon="thumb-up-outline" style={styles.actionButton} mode="text">
            Recomendar
          </Button>
          <Button icon="message-text-outline" style={styles.actionButton} mode="text">
            Comentar
          </Button>
          <Button icon="share-outline" style={styles.actionButton} mode="text">
            Compartir
          </Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 0,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    columnGap: 5,
    paddingLeft: 5,
    marginTop: 10,
    position: 'relative',
  },
  cardContent: {
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  cardCover: {
    borderRadius: 0,
  },
  cardHeaderText: {
    fontSize: 12,
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  body: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  dotsMenuButton: {
    position: 'absolute',
    right: -5,
    top: -15,
  },
  feedActivity: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 8,
  },
  feedActivityIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#d2d2d2',
    marginVertical: 0,
    paddingVertical: 0,
  },
  actionButton: {
    borderColor: 'transparent',
  },
});
