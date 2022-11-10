import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InfoCard from '../components/InfoCard';
import StatusCard from '../components/StatusCard';
import ServiceList from '../components/ServiceList';
import axios from 'axios';
import { BACKEND_URL } from '@env'

// Displays the details of a cluster
const ResourceScreen = ({ route, navigation }) => {
  const { name, namespace, kind, apiVersion, node } = route.params;
  // mockClusterInfo.Name = name;
  // const crd = fetchResourceData(kind, name);
  const [tree, setTree] = useState({children: {}});

  const [crd, setCRD] = useState({status: {conditions: conditions}});
  const [specCardInput, setSpecCardInput] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [statusCardInput, setStatusCardInput] = useState([]);

  useEffect(() => {
    // TODO: Check if Kind == Cluster
    fetchTree(name).then((res) => {
      // console.log("useeffect fetchTree: ", res)
      setTree(res);
    })
    fetchResourceData(kind, name).then((res) => {
      // console.log("useeffect fetchResource: ", res)
      setCRD(res);

      console.log("res spec is ", res.spec);
      let specResult = crdToMapCard(res.spec);
      setSpecCardInput(specResult.value);

      let { conditions, ...items } = res.status;
      let statusResult = crdToMapCard(items);
      setStatusCardInput(statusResult.value);
      setConditions(conditions);
    })
  }, [])

  return (
    <ScrollView style={styles.wrapper} key={name}>
      <Card.Title title="Status"></Card.Title>

      <StatusCard 
        route={route}
        navigation={navigation}
        conditions={conditions}
        items={statusCardInput}
      />
      <Card.Title title="Spec"></Card.Title>
      <InfoCard route={route} navigation={navigation} items={specCardInput} />

      <View style={styles.wrapper}>
        <ServiceList route={route} navigation={navigation} resourceMap={tree.children} />
      </View>

    </ScrollView >
  );
}

export default ResourceScreen;

const spec1 = [
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
    "valueType": "list",
  },
]

function crdToMapCard(resource) {
  let result = [];
  console.log("crdToMapCard, got resource", resource);
  if (typeof resource == "string" || typeof resource == "number" || typeof resource == "boolean") {
    return {
      value: resource.toString(), 
      valueType: "text"
    };
  } else if (Array.isArray(resource)) {
    resource.forEach((e, i) => {
      console.log("crdToMapCard, got array element", e);
      let { value, valueType } = crdToMapCard(e);
      if (valueType == "text") {
        result.push({
          name: value,
          value: "",
          valueType: "text",
        });
      } else {
        result.push({
          name: i,
          value: value,
          valueType: valueType,
        });
      }
    });
  } else {
    // isObject
    Object.entries(resource).forEach(([k, v]) => {
      let name = k;
      console.log("crdToMapCard, got key", k, "value", v);
      let { value, valueType } = crdToMapCard(v);
      
      result.push({
        name: name,
        value: value,
        valueType: valueType,
      });
    });
  }

  return {
    value: result,
    valueType: "list",
  }
}

const conditions = [
  {
    "type": "Ready",
    "status": "True",
    "lastTransitionTime": "2021-03-03T12:00:00Z",
  },
  {
    "type": "ClusterInfraReady",
    "status": "False",
    "severity": "Warning",
    "lastTransitionTime": "2021-03-03T12:00:00Z",
    "reason": "ClusterInfraNotReady",
    "message": "Cluster infrastructure is not ready",
  },
  {
    "type": "AddonsReady",
    "severity": "Warning",
    "status": "False",
    "lastTransitionTime": "2021-03-03T12:00:00Z",
    "reason": "ClusterInfraNotReady",
    "message": "Cluster infrastructure is not ready",
    
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
    "valueType": "list", 
  },
]

const clusterData = {
  "status": {
    "conditions": conditions,
    "info": [
      {
        "name": "Phase",
        "value": "Provisioned",
        "valueType": "string",
      },
      {
        "name": "IsManaged",
        "value": "True",
        "valueType": "string",
      }
  ]
  },
  "spec": spec,
};

const azureClusterData = {
  "status": {
    "conditions": conditions,
    "info": []
  },
  "spec": spec,
  "children": []
};

const fetchResourceData = (kind, name) => {
  console.log("Fetching CRD for", name, "from", BACKEND_URL + '/resource?' + kind + '&' + name)
  return new Promise((resolve, reject) => {
    axios.get(BACKEND_URL + '/resource?kind=' + kind + '&name=' + name).then(
      (response) => {
        // console.log("Response:", response.data);
        resolve(response.data);
      }
    ).catch(error => {
      console.log("Got an axios error fetching tree:", error);
      reject("Axios error fetching tree:", error)
    });
  });
};

const fetchTree = async (name) => {
  console.log("Fetching tree for", name, "from", BACKEND_URL + '/tree/' + name)
  return new Promise((resolve, reject) => {
    axios.get(BACKEND_URL + '/tree/' + name).then(
      (response) => {
        // console.log("Response:", response.data);
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