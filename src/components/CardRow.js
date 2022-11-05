import React, { useCallback } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Linking } from 'react-native';
import { Paragraph, Switch, Menu, Button, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CardRow = (props) => {
  // const isList = props.valueType === 'list';
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const [menuValue, setMenuValue] = React.useState('Light');
  const setAndCloseMenu = (value) => { setMenuValue(value); closeMenu(); }
  
  function getValueComponent(type, value) {
    switch (type) {
      case 'link':
      case 'list':
        return <Icon name="chevron-right" size={30} style={[styles.textStyle, styles.textRight]}></Icon>
      case 'switch':
        return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="#1976D2"/>
      case 'menu':
        return (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
            <Button 
              onPress={openMenu}
              uppercase={false}
              mode="outlined"
              icon="chevron-down"
              color="#888"
              compact
              contentStyle={styles.menuButtonContent}
              labelStyle={styles.menuButtonLabel}
            >
              <Paragraph style={styles.buttonText}>{menuValue}</Paragraph>
            </Button>
            }>
              {
                value.map((item, index) => (
                  <Menu.Item onPress={() => setAndCloseMenu(item)} title={item} />
                ))
              }
          </Menu>
          )
      case 'text':
      default:
        return <Paragraph style={[styles.textStyle, styles.textRight]}>{value}</Paragraph>
    }
  }
  
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(props.value);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(props.value);
    } else {
      Alert.alert(`Don't know how to open this URL: ${props.value}`);
    }
  }, [props.value]);

  return (
    <TouchableOpacity 
      style={styles.touchableRow}
      onPress={() => {
        if (props.valueType === 'list')
          props.navigation.navigate("InfoCardScreen", { name: props.name, items: props.value })
        else if (props.valueType === 'link')
          handlePress()
      }}
      disabled={props.valueType !== 'list' && props.valueType !== 'link'}
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
        getValueComponent(props.valueType, props.value)
      }
      </View>
    </TouchableOpacity>
  )
}

export default CardRow;

const lineHeight = 45;

const styles = StyleSheet.create({
  menuButtonContent: {
    flexDirection: 'row-reverse', // Reverses all the margin calcs
    height: 30,
    justifyContent: 'center',
    fontSize: 30,
  },
  menuButtonLabel: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 4,
    padding: 0,
  },
  leftWrap: {
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    height: lineHeight,
  }, 
  rightWrap: {
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
    marginRight: 10,
  },
  textRight: {
    minWidth: 0,
    textAlign: 'right',
    color: '#888'
  },
  buttonText: {
    color: '#888',
    marginTop: 0,
    marginBottom: 0,
    fontSize: 14,
  },
});
