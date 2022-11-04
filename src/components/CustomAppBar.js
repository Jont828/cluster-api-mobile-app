import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { DrawerActions } from '@react-navigation/native';

const CustomAppBar = ({ route, navigation, options, back }) => {
  const [bellOn, setBellOn] = React.useState(false);

  // console.log("Route is ", route);
  // console.log("Navigation is ", navigation);
  return (
    <Appbar.Header elevated>
      {back && <Appbar.BackAction onPress={navigation.goBack} />}

      <Appbar.Content title={options.title}></Appbar.Content>
      {/* <Appbar.Action icon="dots-vertical" onPress={() => { }} /> */}
      {
        (route.name === 'ResourceScreen') ? (
        <Appbar.Action icon={(bellOn) ? "bell" :  "bell-off"} onPress={() => { setBellOn(!bellOn) }} />
        ) : null
      }
    </Appbar.Header>
  );
}

export default CustomAppBar;