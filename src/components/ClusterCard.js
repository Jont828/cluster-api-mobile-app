import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Title, Caption, Subheading } from 'react-native-paper'
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
        <View style={styles.leftWrap}>
          <View style={styles.leftProvider}>
            <Icon name="microsoft-azure" size={30} color="#2196F3"></Icon>
          </View>
          <View style={styles.leftText}>
            <Title>{name}</Title>
            <Caption style={{fontSize: 14}}>Provisioned</Caption>
          </View>
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
    paddingLeft: 0,
    paddingRight: 10,
  },
  leftWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftProvider: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  leftText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
  fab: {
    position: 'absolute',
    right: 16,
  },
});

export default ClusterCard
