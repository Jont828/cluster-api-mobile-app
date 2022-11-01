import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
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
      }}
      disabled={props.valueType === 'text'}
      >
      <View style={styles.leftWrap}>
        {
          (props.icon) ? (
            <Icon name={props.icon} size={props.iconSize} color={props.iconColor} style={styles.leftIcon} />
          ) : null
        }
        {/* {props.name} */}
        <Paragraph style={styles.textStyle}>{props.name}</Paragraph>
      </View>
        
      <View style={styles.rightWrap}>
      {
        (props.valueType === 'list' || props.valueType === 'map') ? (
          <Icon name="chevron-right" size={30} style={[styles.textStyle, styles.textRight]}></Icon>
        ) : (
          <Paragraph style={[styles.textStyle, styles.textRight]}>{props.value}</Paragraph>
        )
      }
      </View>
    </TouchableOpacity>
  )
}

export default CardListEntry;

const lineHeight = 35;

const styles = StyleSheet.create({
  leftWrap: {
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    height: lineHeight,
  }, 
  touchableRow: {
    alignItems: "center",
    // backgroundColor: 'red',
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
    // backgroundColor: '#aaa',
    // lineHeight: lineHeight,
    // display: 'inline-block',

    // minWidth: 0,
    // overflow: 'hidden',
    // whiteSpace: 'nowrap',
    // textOverflow: 'ellipsis',

    // flex: 1
  },
  leftIcon: {
    display: 'inline',
    paddingTop: 1,
    // verticalAlign: 'middle',
    // lineHeight: lineHeight,
    // marginRight: 20,
    // paddingTop: 1,
    // lineHeight: lineHeight-1,
    marginRight: 5,
  },
  textRight: {
    minWidth: 0,
    textAlign: 'right',
    // lineHeight: lineHeight,
    color: '#888'
  },
});
