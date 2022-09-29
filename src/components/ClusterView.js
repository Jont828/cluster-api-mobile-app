import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import { Avatar, Button, Card, Divider } from 'react-native-paper';
import { Caption, Headline, Paragraph, Subheading, Text, Title, Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TreeView from "react-native-animated-tree-view";
import CardListEntry from './CardListEntry';
import ServiceCard from './ServiceCard';

const mockCidrs = [
  "10.244.0.0/16",
  "2001:1234:5678:9a40::/58"
]

var mockClusterInfo = {
  "Name": "test-cluster",
  "Namespace": "default",
  "Phase": "Provisioned",
  "Ready": "True",
  "PodCIDRs": mockCidrs
}

// Displays the details of a cluster
const ClusterView = (props) => {
  const { name } = props.route.params;
  mockClusterInfo.Name = name;
  return (
    <ScrollView style={styles.wrapper} key={props.title}>
      <Card.Title title="Status"></Card.Title>

      <Card>
        <Card.Content>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Chip icon={() => (
              <Icon name="check-circle" size={20} color="#4CAF50" />
            )}>Ready</Chip>
            <Chip icon={() => (
              <Icon name="check-circle" size={20} color="#4CAF50" />
            )}>Ready2</Chip>
            <Chip icon={() => (
              <Icon name="check-circle" size={20} color="#4CAF50" />
            )}>Ready3</Chip>
            <Chip icon={() => (
              <Icon name="check-circle" size={20} color="#4CAF50" />
            )}>Ready4</Chip>
          </View>
          <Divider style={{ margin: 10 }}></Divider>
          <CardListEntry name="Phase" value="Provisioned" />
          <Divider style={{ margin: 10 }}></Divider>
          <CardListEntry name="Namespace" value="my-namespace" />
        </Card.Content>
      </Card>
      <Card.Title title="Info (Key/value section)"></Card.Title>
      <Card>
        <Card.Content>
          {Object.keys(mockClusterInfo).map((key, index) => {
            console.log("Value is", mockClusterInfo[key])
            return (
              <View>
                <CardListEntry name={key} value={mockClusterInfo[key]} />
                {
                  index < Object.keys(mockClusterInfo).length - 1 ? (
                    <Divider style={{ margin: 10 }}></Divider>
                  ) : null
                }
              </View>
            )
          })}
        </Card.Content>
      </Card>
      <Card.Title title="Pod CIDRs (list idea)"></Card.Title>
      <Card>
        <Card.Content>
          {mockCidrs.map((cidr) => {
            return (
              <View key={cidr}>
                <CardListEntry name={cidr} value="" />
                <Divider style={{ margin: 10 }}></Divider>
              </View>
            )
          })}
        </Card.Content>
      </Card>

      <View style={styles.wrapper}>
        <List.Accordion
          title="Cluster Infrastructure"
          titleStyle={{ fontWeight: '500', fontSize: 20, marginLeft: -15 }}
        >
          <ServiceCard title="AzureCluster" subtitle="my-cluster" status="warning" />
        </List.Accordion>

        <List.Accordion
          title="Control Plane"
          titleStyle={{ fontWeight: '500', fontSize: 20, marginLeft: -15 }}
        >
          <ServiceCard title="KubeadmControlPlane" subtitle="my-cluster" status="error" />
          {/* <ServiceCard title="3 Machines" subtitle="my-cluster" status="success" indent={20} />
          <ServiceCard title="AzureMachineTemplate" subtitle="my-cluster" status="success" indent={20}/> */}
        </List.Accordion>
        <List.Accordion
          title="Workers"
          titleStyle={{ fontWeight: '500', fontSize: 20, marginLeft: -15 }}
        >
          <ServiceCard title="MachineDeployment" subtitle="my-cluster" status="success" />
          <ServiceCard title="MachinePool" subtitle="my-cluster" status="success" />
        </List.Accordion>
      </View>

    </ScrollView >
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
    margin: 10,
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