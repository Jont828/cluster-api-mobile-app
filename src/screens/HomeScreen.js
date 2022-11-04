import React from "react";
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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

      <Card.Title title="Pair with management cluster"/>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardContent}>
            <Title>Scan QR code</Title>
            <Icon name="qrcode-scan" size={30} style={{color: '#888'}}></Icon>
          </View>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardContent}>
            <Title>Sign in to Azure</Title>
            <Icon name="microsoft-azure" size={30} style={{ color: '#1976D2'}}></Icon>
          </View>
        </Card.Content>
      </Card>

    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  cardContent: {
    // backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleWrap: {
    display: 'inline',
    backgroundColor: 'grey',
  },
  wrapper: {
    padding: 10
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",

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