import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import { Avatar, Button, Card, Divider } from 'react-native-paper';
import { Caption, Headline, Paragraph, Subheading, Text, Title, Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TreeView from "react-native-animated-tree-view";
import CardListEntry from '../components/CardListEntry';
import MapComponent from '../components/MapCard';
import StatusCard from '../components/StatusCard';
import ServiceList from '../components/ServiceList';

const mockCidrs = [
  "10.244.0.0/16",
  "2001:1234:5678:9a40::/58",
  "localhost:8080"
]

const mockMap = {
  "key1": "value1",
  "key2": "value2"
}

const nestedMap = {
  "key1": "value1",
  "CIDRS": mockCidrs
}

var mockClusterInfo = {
  "Name": "test-cluster",
  "Namespace": "default",
  "Phase": "Provisioned",
  "Ready": "True",
  "PodCIDRs": mockCidrs,
  "Labels": mockMap,
  "Nested": nestedMap,
}

const services = {
  "Cluster Infrastructure": [
    {
      "kind": "AzureCluster",
      "name": "my-azurecluster",
      "status": "success"
    }
  ],
  "Control Plane": [
    {
      "kind": "KubeadmControlPlane",
      "name": "my-kcp",
      "status": "warning"
    }
  ],
  "Workers": [
    {
      "kind": "MachineDeployment",
      "name": "my-md",
      "status": "success"
    },
    {
      "kind": "MachinePool",
      "name": "my-mp",
      "status": "error"
    }
  ]
}
// {
//   "status": {
//     "conditions": [],
//     "phase": [],
//   },
//   "cards": [
//     {
//       "title": title,
//       "content": mockClusterInfo,
//     }
//   ],
//   "children": services,
// }

const conditions = [
  {
    "type": "Ready",
    "status": "success",
  },
  {
    "type": "ClusterInfraReady",
    "status": "success",
  },
  {
    "type": "AddonsReady",
    "status": "warning",
  }
];

const statusInfo = {
  "Phase": "Provisioned"
}

// Displays the details of a cluster
const ClusterView = (props) => {
  const { name } = props.route.params;
  mockClusterInfo.Name = name;
  return (
    <ScrollView style={styles.wrapper} key={props.title}>
      <Card.Title title="Status"></Card.Title>

      <StatusCard 
        route={props.route}
        navigation={props.navigation}
        conditions={conditions}
        values={statusInfo}
      />
      <Card.Title title="Info (Key/value section)"></Card.Title>
      <Card>
        <Card.Content>
          <MapComponent route={props.route} navigation={props.navigation} values={mockClusterInfo} />
        </Card.Content>
      </Card>

      <View style={styles.wrapper}>
        <ServiceList route={props.route} navigation={props.navigation} items={services} />
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