import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Paragraph } from 'react-native-paper';

const CardListEntry = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Paragraph style={[styles.textStyle, styles.info, {}]}>{props.name}</Paragraph>
      <Paragraph style={[styles.textStyle, styles.info, styles.textRight]}>{props.value}</Paragraph>
    </View>
  )
}

export default CardListEntry;

const styles = StyleSheet.create({
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
});
