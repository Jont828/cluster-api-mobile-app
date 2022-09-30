import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { List } from 'react-native-paper';
import { Avatar, Button, Card } from 'react-native-paper';
import { Caption, Headline, Paragraph, Subheading, Text, Title, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListScreen = ({route, navigation}) => {
  return (
    <ScrollView style={styles.wrapper}>
      <Card>
        <Card.Content>
          {
            route.params.values.map( (value, index) => {
              return (
                <View key={index}>
                  <Paragraph style={styles.info}>{value}</Paragraph>
                  {index < route.params.values.length - 1 ? <Divider style={{ margin: 10 }}></Divider> : null}
                </View>
              )
            })
          }
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
  },
  chevronWrap: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [
      { translateY: -5 } // TODO: don't hard code this
    ]
  },
  chevron: {
    fontSize: 40,
    color: 'grey'
  },
  provider: {
    marginLeft: 10,
    fontSize: 20,
    color: '#2196F3'
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});