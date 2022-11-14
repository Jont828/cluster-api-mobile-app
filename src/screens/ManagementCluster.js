import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Title } from 'react-native-paper'
import ClusterCard from '../components/ClusterCard';
import { BACKEND_URL } from '@env'
import axios from 'axios';


const mockClusters = {
  'my-namespace': [
    {
      name: 'my-test-cluster',
      provider: 'azure',
    },
    {
      name: 'my-second-cluster',
      provider: 'azure',
    }
  ],
  'my-other-namespace': [
    {
      name: 'my-other-cluster',
      provider: 'azure',
    }
  ],
}

const NamespaceList = (props) => {
  return (
    <View style={styles.wrapper}>
      <Title>{props.namespace}</Title>
      {props.clusters.map((cluster) => {
        console.log("cluster name: ", cluster.name)
        return <ClusterCard name={cluster.name} path="TargetCluster" navigation={props.navigation} key={cluster.name} />
      })}
    </View>
  )
}

// Displays a list of clusters grouped by namespace
const ManagementCluster = (props) => {
  const [clusters, setClusters] = useState({});
  useEffect(() => {
    console.log("Using BACKEND_URL", BACKEND_URL);
    axios.get(BACKEND_URL + '/managementclusters').then((res) => {
      console.log("cluster overview: ", res.data)
      setClusters(res.data);
    }).catch((err) => {
      console.log("Axios error fetching management cluster: ", err)
    })
  }, [])
  return(
    <ScrollView style={styles.wrapper}>
      {Object.keys(clusters).map((namespace) => <NamespaceList namespace={namespace} clusters={clusters[namespace]} navigation={props.navigation} key={namespace} />)}
    </ScrollView>
  )
};

export default ManagementCluster;

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
  },
});