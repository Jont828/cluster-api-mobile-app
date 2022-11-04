import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Title, Caption } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Displays a card with a title and a provider icon. Tapping the card navigates to the path specified in path
const ClusterCard = ({route, navigation, name, namespace}) => {
  return(
    <Card style={styles.card} onPress={() => navigation.navigate("ResourceScreen", 
      {
        namespace: namespace,
        name: name,
        kind: "Cluster",
        apiVersion: "v1beta1"
      })}>
      <View style={styles.cardContentWrapper}>
        <View styles={styles.leftWrap}>
          <Title>
            {name} <Icon name="microsoft-azure" style={styles.provider}></Icon>
          </Title>
          <Caption>Provisioned</Caption>
        </View>
        <View style={styles.rightWrap}>
          <Icon name="chevron-right" style={styles.chevron}></Icon>
        </View>
      </View>
    </Card>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
  },
  cardContentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 10,
  },
  rightWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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

export default ClusterCard
