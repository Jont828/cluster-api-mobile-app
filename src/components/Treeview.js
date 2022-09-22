import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import { Avatar, Button, Card } from 'react-native-paper';
import { Caption, Headline, Paragraph, Subheading, Text, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TreeView from "react-native-animated-tree-view";

const Treeview = (props) => {
  return (
    <View>
      {/* <TreeView data={data} /> */}
      <View style={styles.wrapper}>
        <Title>Cluster Infrastructure</Title>
        {/* <Native.Button> */}
        <Card style={styles.card} onPress={() => { }}>
          <Card.Title title="AzureCluster" subtitle="my-cluster" style={styles.title} subtitleStyle={styles.name} />
          <View style={styles.leftWrap}>
          </View>
          <View style={styles.chevronWrap}>
            <Icon name="chevron-right" style={styles.chevron}></Icon>
          </View>
        </Card>
        {/* </Native.Button> */}
      </View>

    </View >
  );
}

export default Treeview;

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'black',
  },
  wrapper: {
    margin: 10,
  },
  leftWrap: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    backgroundColor: '#4CAF50',
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
    marginTop: 10,
    marginBottom: 10,
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