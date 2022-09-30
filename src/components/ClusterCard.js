import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Title, Caption } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Displays a card with a title and a provider icon. Tapping the card navigates to the path specified in props.path
const ClusterCard = (props) => {
  // console.log("ClusterCard props: ", props.name)
  return(
    <Card style={styles.card} onPress={() => props.navigation.navigate("ResourceScreen", {name: props.name})}>
      <Card.Content>
        <Title>
          {props.name} <Icon name="microsoft-azure" style={styles.provider}></Icon>
        </Title>
        <Caption>Provisioned</Caption>
        <View style={styles.chevronWrap}>
          <Icon name="chevron-right" style={styles.chevron}></Icon>
        </View>
      </Card.Content>
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

export default ClusterCard
