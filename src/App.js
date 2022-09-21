import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, } from 'react-native-paper';
import { Avatar, Button, Card } from 'react-native-paper';
import { Caption, Headline, Paragraph, Subheading, Text, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const App = () => (
  <View>
    <Appbar.Header elevated>
      <Appbar.Action icon="menu" onPress={() => { }} />
      {/* <Appbar.BackAction onPress={() => { }} /> */}
      <Appbar.Content title="Clusters"></Appbar.Content>
      <Appbar.Action icon="dots-vertical" onPress={() => { }} />
      {/* <Appbar.Action icon="magnify" onPress={() => { }} /> */}
    </Appbar.Header>
    <View style={styles.wrapper}>
      <Title>my-namespace</Title>
      <Card style={styles.card}>
        {/* <Card.Title title="my-cluster" subtitle="Provisioned" /> */}
        <Card.Content>
          <Title>
            my-cluster <Icon name="microsoft-azure" style={styles.provider}></Icon>
          </Title>
          <Caption>Provisioned</Caption>
          <View style={styles.chevronWrap}>
            <Icon name="chevron-right" style={styles.chevron}></Icon>
          </View>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        {/* <Card.Title title="my-cluster" subtitle="Provisioned" /> */}
        <Card.Content>
          <Title>
            my-other-cluster <Icon name="microsoft-azure" style={styles.provider}></Icon>
          </Title>
          <Caption>Provisioned</Caption>
          <View style={styles.chevronWrap}>
            <Icon name="chevron-right" style={styles.chevron}></Icon>
          </View>
        </Card.Content>
      </Card>
    </View>

    <View style={styles.wrapper}>
      <Title>my-other-namespace</Title>
      <Card style={styles.card}>
        {/* <Card.Title title="my-cluster" subtitle="Provisioned" /> */}
        <Card.Content>
          <Title>
            my-fake-cluster <Icon name="microsoft-azure" style={styles.provider}></Icon>
          </Title>
          <Caption>Provisioned</Caption>
          <View style={styles.chevronWrap}>
            <Icon name="chevron-right" style={styles.chevron}></Icon>
          </View>
        </Card.Content>
      </Card>
    </View>
  </View>
);

export default App;

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
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