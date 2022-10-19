import React from "react";
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import ServiceCard from '../components/ServiceCard';

const HomeScreen = ({ route, navigation }) => {
  return (
    <ScrollView style={styles.wrapper}>
      <Card.Title title="Recently Viewed"></Card.Title>
      <ServiceCard 
        kind={'Cluster'}
        name={"my-resource"}
        status={'success'}
        route={route}
        navigation={navigation}
        // node={resource}
      />
      <ServiceCard 
        kind={'DockerCluster'}
        name={"my-resource-2"}
        status={'error'}
        route={route}
        navigation={navigation}
        // node={resource}
      />

      <Card.Title title="Resource 1"/>
      <Card style={styles.card}>
        <Card.Title title="TODO" subtitle="Card Subtitle" />
      </Card>

    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  card: {
    // marginTop: 10,
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