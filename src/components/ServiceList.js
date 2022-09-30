import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import { Avatar, Button, Card, Divider } from 'react-native-paper';
import { Caption, Headline, Paragraph, Subheading, Text, Title, Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ServiceCard from '../components/ServiceCard';


// Displays the details of a cluster
const ClusterView = ({route, navigation, items}) => {
  return (
    <View>
      {
        Object.keys(items).map( (key, index) => {
          return (
            <List.Accordion
              key={key}
              title={key}
              titleStyle={{ fontWeight: '500', fontSize: 20, marginLeft: -15 }}
            >
              {
                items[key].map( (card, j) => {
                  return (
                    <ServiceCard key={j} title={card.kind} subtitle={card.name} status={card.status} />
                  )
                })
              }
            </List.Accordion>
          );
        })
      }
    </View>
  );
}

export default ClusterView;

const styles = StyleSheet.create({
  chip: {
    // display: 'inline',
  },
  textStyle: {
    // fontSize: 25,
    flex: 1
  },
  info: {
    // fontSize: 20,
  },
  textRight: {
    textAlign: 'right',
    color: '#888'
  },
  name: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'black',
  },
  wrapper: {
    padding: 10,
  },
  successBg: {
    backgroundColor: '#4CAF50' // Success
  },
  warningBg: {
    backgroundColor: '#fb8c00'
  },
  errorBg: {
    backgroundColor: '#ff5252'
  },
  success: {
    color: '#4CAF50' // Success
  },
  warning: {
    color: '#fb8c00'
  },
  error: {
    color: '#ff5252'
  },
  leftWrap: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    backgroundColor: '#4CAF50', // Success
    // backgroundColor: '#fb8c00', // Warning
    // backgroundColor: '#ff5252', // Error
    width: 15,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  title: {
    marginLeft: 10,
  },
  card: {
    // width: '100%',
    // height: '100%',
    // margin: 0,
    // height: 70,
    marginTop: 10,
    marginBottom: 10,
  },
  indent1: {
    marginLeft: 20,
  },
  accordion: {
    // backgroundColor: 'red',
    padding: 0,
  },
  chevronWrap: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [
      { translateY: -20 } // TODO: don't hard code this
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