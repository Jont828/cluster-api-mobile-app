import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { DrawerActions } from '@react-navigation/native';

const CustomAppBar = (props) => {
  return (
    <Appbar.Header elevated>
      {
        props.back ?
          <Appbar.BackAction onPress={props.navigation.goBack} /> :
          <Appbar.Action icon="menu" onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())} />
      }

      <Appbar.Content title={props.options.title}></Appbar.Content>
      <Appbar.Action icon="dots-vertical" onPress={() => { }} />
      {/* <Appbar.Action icon="magnify" onPress={() => { }} /> */}
    </Appbar.Header>
  );
}

export default CustomAppBar;