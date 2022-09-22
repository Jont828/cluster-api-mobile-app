import * as React from 'react';
import { ProgressViewIOSComponent } from 'react-native';

import { Appbar } from 'react-native-paper';

const CustomAppBar = (props) => {
  return (
    <Appbar.Header elevated>
      {
        props.back ?
          <Appbar.BackAction onPress={props.navigation.goBack} /> :
          <Appbar.Action icon="menu" onPress={() => { }} />
      }

      <Appbar.Content title={props.options.title}></Appbar.Content>
      <Appbar.Action icon="dots-vertical" onPress={() => { }} />
      {/* <Appbar.Action icon="magnify" onPress={() => { }} /> */}
    </Appbar.Header>
  );
}

export default CustomAppBar;