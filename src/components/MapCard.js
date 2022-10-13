import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardListEntry from './CardListEntry';

const MapCard = ({ values, route, navigation }) => {
  return (
    <Card>
      <Card.Content style={{paddingVertical: 5}}>
      {
        Object.keys(values).map((key, index) => {
          return (
            <View key={key}>
              <CardListEntry 
                name={key}
                value={values[key]}
                route={route}
                navigation={navigation} 
                // icon={"check-circle"} 
                // iconSize={20}
                // iconColor={"#4CAF50"}
              />
              {
                index < Object.keys(values).length - 1 ? (
                  <Divider></Divider>
                ) : null
              }
            </View>
          )
        })
      }
      </Card.Content>
    </Card>
  );
}

export default MapCard;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  card: {
    // marginTop: 10,
    // marginBottom: 10,
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