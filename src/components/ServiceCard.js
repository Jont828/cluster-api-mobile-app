import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ServiceCard = (props) => {
    return(
      <Card style={[styles.card, {marginLeft: props.indent}]} onPress={() => { }}>
        <Card.Title title={props.title} subtitle={props.subtitle} style={styles.title} subtitleStyle={styles.name} />
        <View style={[styles.leftWrap, eval("styles." + props.status)]} />
        <View style={styles.chevronWrap}>
            <Icon name="chevron-right" style={styles.chevron}></Icon>
        </View>
      </Card>
    )
}

export default ServiceCard

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'black',
  },
  success: {
    backgroundColor: '#4CAF50' // Success
  },
  warning: {
    backgroundColor: '#fb8c00' 
  },
  error: {
    backgroundColor: '#ff5252' 
  },
  leftWrap: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: 15,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  title: {
    marginLeft: 10,
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
      { translateY: -20 } // TODO: don't hard code this
    ]
  },
  chevron: {
    fontSize: 40,
    color: 'grey'
  },
});
