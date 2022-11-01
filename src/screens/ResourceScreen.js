import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapCard from '../components/MapCard';
import StatusCard from '../components/StatusCard';
import ServiceList from '../components/ServiceList';
import axios from 'axios';
import { BACKEND_URL } from '@env'

// Displays the details of a cluster
const ResourceScreen = ({ route, navigation }) => {
  const { name, namespace, kind, apiVersion, node } = route.params;
  // mockClusterInfo.Name = name;
  const { status, spec } = fetchResourceData(kind, name);
  const [tree, setTree] = useState({children: {}});

  useEffect(() => {
    fetchTree(name).then((res) => {
      console.log("useeffect res: ", res)
      setTree(res);
    })
  }, [])

  return (
    <ScrollView style={styles.wrapper} key={name}>
      <Card.Title title="Status"></Card.Title>

      <StatusCard 
        route={route}
        navigation={navigation}
        conditions={status.conditions}
        values={status.info}
      />
      <Card.Title title="Spec"></Card.Title>
      <MapCard route={route} navigation={navigation} items={spec} />

      <View style={styles.wrapper}>
        <ServiceList route={route} navigation={navigation} resourceMap={tree.children} />
      </View>

    </ScrollView >
  );
}

export default ResourceScreen;

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

const spec = [
  {
    "name": "Paused",
    "value": "False",
    "valueType": "string",
  },
  {
    "name": "APIServerPort",
    "value": "6443",
    "valueType": "string",
  },
  {
    "name": "PodCIDRs",
    "value": [
      {
        "name": "10.244.0.0/16"
      },
      {
        "name": "2001:1234:5678:9a40::/58",
      },
    ],
    "valueType": "list",
  },
  {
    "name": "Labels",
    "value": [
      {
        "name": "Label1",
        "value": "Value1",
        "valueType": "string",
      },
      {
        "name": "Label2",
        "value": "Value2",
        "valueType": "string",
      },
    ],
    "valueType": "map",
  },
]

const clusterData = {
  "status": {
    "conditions": conditions,
    "info": {
      "Phase": "Provisioned",
      "IsManaged": "True",
    }
  },
  "spec": spec,
};

const azureClusterData = {
  "status": {
    "conditions": [
      {
        "type": "Ready",
        "status": "warning",
      },
      {
        "type": "VNetReady",
        "status": "success",
      },
      {
        "type": "NSGReady",
        "status": "warning",
      },
      {
        "type": "LoadBalancersReady",
        "status": "success",
      }
    ],
    "info": {}
  },
  "spec": spec,
  "children": []
};

const fetchResourceData = (kind, name) => {
  switch (kind) {
    case "Cluster":
      return clusterData;
    case "AzureCluster":
      return azureClusterData;
    default:
      return azureClusterData;
  }
};

const fetchTree = async (name) => {
  console.log("Fetching tree for", name, "from", BACKEND_URL + '/tree/' + name)
  return new Promise((resolve, reject) => {
    axios.get(BACKEND_URL + '/tree/' + name).then(
      (response) => {
        console.log("Response:", response.data);
        resolve(response.data);
      }
    ).catch(error => {
      console.log("Got an axios error fetching tree:", error);
      reject("Axios error fetching tree:", error)
    });
  });
}

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