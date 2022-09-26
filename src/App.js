import * as React from 'react';
import ManagementCluster from './screens/ManagementCluster';
import ListScreen from './screens/ListScreen';
import ClusterView from './components/ClusterView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomAppBar from './components/CustomAppBar';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='ManagementCluster'
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />,
      }}>
      <Stack.Screen name="ManagementCluster" component={ManagementCluster} options={{ title: 'Clusters' }} />
      <Stack.Screen name="TargetCluster" component={ClusterView} options={{ title: 'Cluster/my-cluster' }} />
      <Stack.Screen name="ListScreen" component={ListScreen} options={{ title: 'Pod CIDRs' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;