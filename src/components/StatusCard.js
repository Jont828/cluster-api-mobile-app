import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { List } from 'react-native-paper';
import { Avatar, Button, Card } from 'react-native-paper';
import { Caption, Headline, Paragraph, Subheading, Text, Title, Divider, Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardListEntry from './CardListEntry';

const StatusCard = ({ conditions, values, route, navigation }) => {
  const getIcon = (status) => {
    switch(status) {
      case "success":
        return "check-circle";
      case "info":
        return "info-circle";
      case "warning":
      case "error":
        return "alert-circle";
      default:
        return "help-circle";
    }
  };
  const getColor = (status) => {
    switch(status) {
      case "success":
        return '#4CAF50' // Success
      case "info":
      case "warning":
        return '#fb8c00'
      case "error":
        return '#ff5252'
    }
  };
  return (
    <Card>
      <Card.Content style={styles.cardContent}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            conditions.map((condition, index) => {
              return (
                <Chip 
                  key={index}
                  style={styles.chip}
                  icon={() => (
                  <Icon name={getIcon(condition.status)} size={20} color={getColor(condition.status)} />
                )}>{ condition.type }</Chip>
              )
            })
          }
        </View>
        <View>
          {
            Object.keys(values).map((key, index) => {
              return (
                <View key={key}>
                  <Divider></Divider>
                  <CardListEntry name={key} value={values[key]} route={route} navigation={navigation} />
                </View>
              )
            })
          }
        </View>
      </Card.Content>
    </Card>
  );
}

export default StatusCard;

const styles = StyleSheet.create({
  chip: {
    marginBottom: 8,
    marginRight: 8,
  },
  cardContent: {
    paddingBottom: 5,
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