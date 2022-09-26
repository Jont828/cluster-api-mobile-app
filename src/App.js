import 'react-native-gesture-handler';
import * as React from 'react';
import ManagementCluster from './screens/ManagementCluster';
import ListScreen from './screens/ListScreen';
import ClusterView from './components/ClusterView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomAppBar from './components/CustomAppBar';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Menu'
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />,
      }}
      >
      <Stack.Screen name="Menu" component={Menu} />
      {/* <Stack.Screen name="ManagementCluster" component={ManagementCluster} options={{ title: 'Clusters' }} /> */}
      <Stack.Screen name="ClusterView" component={ClusterView} options={({ route }) => ({ title: route.params.name })} />
      <Stack.Screen name="ListScreen" component={ListScreen} options={{ title: 'Pod CIDRs' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

const Menu = () => {
  return(
    <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Drawer.Screen 
          name="ManagementCluster" 
          component={ManagementCluster} 
          options={{ title: 'Clusters' }} 
        />
    </Drawer.Navigator>
  )
}

export default App;