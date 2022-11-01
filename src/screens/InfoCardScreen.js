import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InfoCard from '../components/InfoCard';

const InfoCardScreen = ({route, navigation}) => {
  const items = route.params.items;
  console.log("Items are", items);
  return (
    <ScrollView style={styles.wrapper}>
      <InfoCard route={route} navigation={navigation} items={route.params.items}/>
    </ScrollView>
  );
}

export default InfoCardScreen;

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