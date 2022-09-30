import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CardListEntry = (props) => {

  const isObject = (val) => {
    if (val === null) { return false; }
    return ((typeof val === 'function') || (typeof val === 'object'));
  };

  return (
    <TouchableOpacity 
      style={{ flexDirection: 'row' }}
      onPress={() => {
        props.navigation.navigate((Array.isArray(props.value) ? "ListScreen" : "MapScreen"), { name: props.name, values: props.value })}
      }
      disabled={typeof props.value === 'string'}
      >
      <Paragraph style={[styles.textStyle, styles.info, {}]}>{props.name}</Paragraph>
      {
        !(typeof props.value === 'string') ? (
          <View style={styles.chevronWrap}>
            <Icon name="chevron-right" style={styles.chevron}></Icon>
          </View>
        ) : (
          <Paragraph style={[styles.textStyle, styles.info, styles.textRight]}>{props.value}</Paragraph>
        )
      }
    </TouchableOpacity>
  )
}

export default CardListEntry;

const styles = StyleSheet.create({
  chevronWrap: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [
      { translateY: -15 } // TODO: don't hard code this
    ]
  },
  chevron: {
    fontSize: 30,
    color: 'grey',
  },
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
