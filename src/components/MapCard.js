import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardListEntry from './CardListEntry';

const MapCard = ({ items, route, navigation }) => {
  return (
    <Card>
      <Card.Content style={{paddingVertical: 5}}>
      {
        items.map((item, index) => {
          return (
            <View key={index}>
              <CardListEntry
                name={item.name}
                route={route}
                navigation={navigation} 
                value={item.value}
                valueType={item.valueType}
                // icon={item.icon}
                // iconSize={item.iconSize}
                // iconColor={item.iconColor}
                // TODO: add additional props like supporting a link to a website.
                // icon={"check-circle"} 
                // iconSize={20}
                // iconColor={"#4CAF50"}
              />
              {
                index < Object.keys(items).length - 1 ? (
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