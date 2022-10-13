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
      style={styles.touchableRow}
      onPress={() => {
        props.navigation.navigate((Array.isArray(props.value) ? "ListScreen" : "MapScreen"), { name: props.name, values: props.value })}
      }
      disabled={typeof props.value === 'string'}
      >
      {
        (props.icon) ? (
          <Icon name={props.icon} size={props.iconSize} color={props.iconColor} style={styles.leftIcon} />
        ) : null
      }
      <Paragraph style={styles.textStyle}>{props.name}</Paragraph>

      {
        !(typeof props.value === 'string') ? (
          <Icon name="chevron-right" size={30} style={[styles.textStyle, styles.textRight]}></Icon>
        ) : (
          <Paragraph style={[styles.textStyle, styles.textRight]}>{props.value}</Paragraph>
        )
      }
    </TouchableOpacity>
  )
}

export default CardListEntry;

const lineHeight = 35;

const styles = StyleSheet.create({
  touchableRow: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  chevron: {
    lineHeight: lineHeight,
    color: 'grey',
  },
  textStyle: {
    lineHeight: lineHeight,
    flex: 1
  },
  leftIcon: {
    paddingTop: 1,
    lineHeight: lineHeight-1,
    marginRight: 5,
  },
  textRight: {
    textAlign: 'right',
    color: '#888'
  },
});
