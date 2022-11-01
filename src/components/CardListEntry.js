import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CardListEntry = (props) => {
  console.log("Props are", props);
  return (
    <TouchableOpacity 
      style={styles.touchableRow}
      onPress={() => {
        if (props.valueType === 'list' || props.valueType === 'map')
          props.navigation.navigate("MapScreen", { name: props.name, items: props.value })
        // if (props.valueType === 'list')
        //   props.navigation.navigate("ListScreen", { name: props.name, items: props.value })
        // else if (props.valueType === 'map')
        //   props.navigation.navigate("MapScreen", { name: props.name, items: props.value })
      }}
      disabled={props.valueType === 'text'}
      >
      {
        (props.icon) ? (
          <Icon name={props.icon} size={props.iconSize} color={props.iconColor} style={styles.leftIcon} />
        ) : null
      }
      <Paragraph style={styles.textStyle}>{props.name}</Paragraph>

      {
        (props.valueType === 'list' || props.valueType === 'map') ? (
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
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  chevron: {
    lineHeight: lineHeight,
    color: 'grey',
  },
  textStyle: {
    lineHeight: lineHeight,
    // minWidth: 0,
    // overflow: 'hidden',
    // whiteSpace: 'nowrap',
    // textOverflow: 'ellipsis',

    // flex: 1
  },
  leftIcon: {
    paddingTop: 1,
    lineHeight: lineHeight-1,
    marginRight: 5,
  },
  textRight: {
    minWidth: 0,
    textAlign: 'right',
    color: '#888'
  },
});
