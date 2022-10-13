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
          let val = values[key];
          var text, list, map;
          if (typeof val === 'string')
            text = val;
          else if (Array.isArray(val))
            list = val;
          else // TODO: add a test to check if it actually is a map.
            map = val;

          return (
            <View key={key}>
              <CardListEntry 
                name={key}
                route={route}
                navigation={navigation} 
                text={text}
                list={list}
                map={map}
                // TODO: add additional props like supporting a link to a website.
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