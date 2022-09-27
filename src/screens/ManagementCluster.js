import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper'
import ClusterCard from '../components/ClusterCard';


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
const ManagementCluster = (props) => (
  <View style={styles.wrapper}>
    {Object.keys(mockClusters).map((namespace) => <NamespaceList namespace={namespace} clusters={mockClusters[namespace]} navigation={props.navigation} key={namespace} />)}
  </View>
);

export default ManagementCluster;

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
  },
});