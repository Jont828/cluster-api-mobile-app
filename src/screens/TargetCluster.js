import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { Avatar, Button, Card } from 'react-native-paper';
import { Caption, Headline, Paragraph, Subheading, Text, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cluster from '../components/ClusterView';

const TargetCluster = (props) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <ScrollView style={styles.wrapper}>
      <Cluster></Cluster>
    </ScrollView>
  );
}

export default TargetCluster;

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