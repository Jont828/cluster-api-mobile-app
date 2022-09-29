import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { List } from 'react-native-paper';
import { Avatar, Button, Card } from 'react-native-paper';
import { Caption, Headline, Paragraph, Subheading, Text, Title, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardListEntry from '../components/CardListEntry';

const MapScreen = ({route, navigation}) => {
  const values = route.params.values;
  console.log("Values are", values);
  return (
    <ScrollView style={styles.wrapper}>
      <Card>
        <Card.Content>
          {
            Object.keys(values).map( (key, index) => {
              return (
                <View key={key}>
                  <CardListEntry name={key} value={values[key]} navigation={navigation} />
                  {
                    index < Object.keys(values).length - 1 ? (
                      <Divider style={{ margin: 10 }}></Divider>
                    ) : null
                  }
                </View>
              )
            })
          }
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

export default MapScreen;

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