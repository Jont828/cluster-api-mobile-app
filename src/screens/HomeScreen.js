import React from "react";
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ServiceCard from '../components/ServiceCard';

const HomeScreen = ({ route, navigation }) => {

  const recents = [
    {
      kind: "Cluster",
      name: "my-cluster",
      status: "success",
      namespace: "default",
    },
    {
      kind: "AzureMachinePool",
      name: "my-amp",
      status: "error",
      namespace: "default",
    }
  ];
  
  return (
    <ScrollView style={styles.wrapper}>
      <Card.Title title="Recently Viewed"></Card.Title>
      {
        recents.map( (resource, index) => {
          return (
            // <TouchableOpacity
            //   onPress={
            //     navigation.navigate("ClustersTab", { screen: "ResourceScreen", params: { name: resource.name, namespace: resource.namespace, kind: resource.kind } })
            //   }
            // >
            <ServiceCard 
              key={index}
              kind={resource.kind}
              name={resource.name}
              status={resource.status}
              route={route}
              navigation={navigation}
              node={resource}
            />
            // </TouchableOpacity>
          )
        })
      }

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
            <Title>Sign in to AWS</Title>
            <Icon name="aws" size={30} style={{ color: '#ff9900'}}></Icon>
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
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardContent}>
            <Title>Sign in to GCP</Title>
            <Icon name="google-cloud" size={30} style={{ color: '#EA4335'}}></Icon>
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