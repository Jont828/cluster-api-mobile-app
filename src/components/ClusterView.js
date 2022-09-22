import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import { Avatar, Button, Card, Divider } from 'react-native-paper';
import { Caption, Headline, Paragraph, Subheading, Text, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TreeView from "react-native-animated-tree-view";

const Cluster = (props) => {
  return (
    <View>
      <Card.Title title="Info (Key/value section)"></Card.Title>
      <Card>
        <Card.Content>
          <View style={{ flexDirection: 'row' }}>
            <Headline style={[styles.textStyle, styles.info, {}]}>Name</Headline>
            <Headline style={[styles.textStyle, styles.info, styles.textRight]}>my-cluster</Headline>
          </View>
          <Divider style={{ margin: 10 }}></Divider>
          <View style={{ flexDirection: 'row' }}>
            <Headline style={[styles.textStyle, styles.info, {}]}>Namespace</Headline>
            <Headline style={[styles.textStyle, styles.info, styles.textRight]}>my-namespace</Headline>
          </View>
          <Divider style={{ margin: 10 }}></Divider>
          <View style={{ flexDirection: 'row' }}>
            <Headline style={[styles.textStyle, styles.info, {}]}>Phase</Headline>
            <Headline style={[styles.textStyle, styles.info, styles.textRight]}>Provisioned</Headline>
          </View>
          <Divider style={{ margin: 10 }}></Divider>

          <View style={{ flexDirection: 'row' }}>
            <Headline style={[styles.textStyle, styles.info, {}]}>Ready</Headline>
            <Headline style={[styles.textStyle, styles.info, styles.textRight]}>True</Headline>
          </View>
          <Divider style={{ margin: 10 }}></Divider>

          <View style={{ flexDirection: 'row' }}>
            <Headline style={[styles.textStyle, styles.info, {}]}>Pod CIDRs</Headline>
            <Headline style={[styles.textStyle, styles.info, styles.textRight]}><Icon name="chevron-right" size={30}></Icon></Headline>
          </View>
          {/* <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textStyle, { backgroundColor: 'blue' }]}>Left Align</Text>
            <Text style={[styles.textStyle, { backgroundColor: 'red', textAlign: 'right' }]}>Right Align</Text>
          </View> */}

          {/* <Headline style={styles.info}>Provisioned<Text style={{ align: 'right' }}>Hi</Text></Headline> */}

        </Card.Content>
      </Card>

      <Card.Title title="Pod CIDRs (list idea)"></Card.Title>
      <Card>
        <Card.Content>
          <Headline style={styles.info}>10.244.0.0/16</Headline>
          <Divider style={{ margin: 10 }}></Divider>
          <Headline style={styles.info}>2001:1234:5678:9a40::/58</Headline>

        </Card.Content>
      </Card>

      <View style={styles.wrapper}>
        <List.Accordion
          title="Cluster Infrastructure"
          titleStyle={{ fontWeight: '500', fontSize: 20, marginLeft: -15 }}
        >
          <Card style={styles.card} onPress={() => { }}>
            <Card.Title title="AzureCluster" subtitle="my-cluster" style={styles.title} subtitleStyle={styles.name} />
            <View style={styles.leftWrap}>
            </View>
            <View style={styles.chevronWrap}>
              <Icon name="chevron-right" style={styles.chevron}></Icon>
            </View>
          </Card>
        </List.Accordion>

        <List.Accordion
          title="Control Plane"
          titleStyle={{ fontWeight: '500', fontSize: 20, marginLeft: -15 }}
        >
          <Card style={styles.card} onPress={() => { }}>
            <Card.Title title="KubeadmControlPlane" subtitle="my-cluster" style={styles.title} subtitleStyle={styles.name} />
            <View style={styles.leftWrap}>
            </View>
            <View style={styles.chevronWrap}>
              <Icon name="chevron-right" style={styles.chevron}></Icon>
            </View>
          </Card>
          <Card style={[styles.card, styles.indent1]} onPress={() => { }}>
            <Card.Title title="3 Machines" subtitle="my-cluster" style={styles.title} subtitleStyle={styles.name} />
            <View style={styles.leftWrap}>
            </View>
            <View style={styles.chevronWrap}>
              <Icon name="chevron-right" style={styles.chevron}></Icon>
            </View>
          </Card>
          <Card style={[styles.card, styles.indent1]} onPress={() => { }}>
            <Card.Title title="AzureMachineTemplate" subtitle="my-cluster" style={styles.title} subtitleStyle={styles.name} />
            <View style={styles.leftWrap}>
            </View>
            <View style={styles.chevronWrap}>
              <Icon name="chevron-right" style={styles.chevron}></Icon>
            </View>
          </Card>
        </List.Accordion>
        <List.Accordion
          title="Workers"
          titleStyle={{ fontWeight: '500', fontSize: 20, marginLeft: -15 }}
        >
          <Card style={styles.card} onPress={() => { }}>
            <Card.Title title="MachineDeployment" subtitle="my-cluster" style={styles.title} subtitleStyle={styles.name} />
            <View style={styles.leftWrap}>
            </View>
            <View style={styles.chevronWrap}>
              <Icon name="chevron-right" style={styles.chevron}></Icon>
            </View>
          </Card>
          <Card style={styles.card} onPress={() => { }}>
            <Card.Title title="MachinePool" subtitle="my-cluster" style={styles.title} subtitleStyle={styles.name} />
            <View style={styles.leftWrap}>
            </View>
            <View style={styles.chevronWrap}>
              <Icon name="chevron-right" style={styles.chevron}></Icon>
            </View>
          </Card>
        </List.Accordion>
      </View>

    </View >
  );
}

export default Cluster;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    flex: 1
  },
  info: {
    fontSize: 20,
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
    height: 70,
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