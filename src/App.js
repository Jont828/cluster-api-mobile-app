import 'react-native-gesture-handler';
import * as React from 'react';
import ManagementCluster from './screens/ManagementCluster';
import ListScreen from './screens/ListScreen';
import MapScreen from './screens/MapScreen';
import ResourceScreen from './screens/ResourceScreen';
import Settings from './screens/Settings';
import HomeScreen from './screens/HomeScreen';
import Notifications from './screens/Notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomAppBar from './components/CustomAppBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeStack = createNativeStackNavigator();
const ClusterStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        shifting={false}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#ffffff88",
          tabBarLabelStyle: {
            fontSize: 11,
            paddingTop: 2,
          },
          tabBarStyle: {
            paddingTop: 5,
            backgroundColor: '#1976D2'
            // height: 200,
          }
        }}
        barStyle={{
          paddingTop: 5,
          backgroundColor: '#1976D2'
          // height: 200,
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackNav}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="ClustersTab"
          component={ClusterStackNav}
          options={{
            tabBarLabel: 'Clusters',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="kubernetes" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="NotificationsTab"
          component={NotificationStackNav}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsTab"
          component={SettingsStackNav}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>

);

const HomeStackNav = () => {
  return (
    <HomeStack.Navigator initialRouteName='Menu'
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />,
      }}
    >
      <HomeStack.Screen name="HomeStackScreen" component={HomeScreen} options={{ title: 'Home' }} />
    </HomeStack.Navigator>
  )
}

const ClusterStackNav = () => {
  return (
    <ClusterStack.Navigator initialRouteName='Menu'
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />,
      }}
    >
      <ClusterStack.Screen name="ManagementCluster" component={ManagementCluster} options={{ title: 'Clusters' }} />
      <ClusterStack.Screen name="ResourceScreen" component={ResourceScreen} options={({ route }) => ({ title: route.params.name })} />
      <ClusterStack.Screen name="ListScreen" component={ListScreen} options={({ route }) => ({ title: route.params.name })} />
      <ClusterStack.Screen name="MapScreen" component={MapScreen} options={({ route }) => ({ title: route.params.name })} />
    </ClusterStack.Navigator>
  )
}

const NotificationStackNav = () => {
  return (
    <NotificationStack.Navigator initialRouteName='Menu'
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />,
      }}
    >
      <NotificationStack.Screen name="Notifications" component={Notifications} options={{ title: 'Notifications' }} />
    </NotificationStack.Navigator>
  )
}

const SettingsStackNav = () => {
  return (
    <SettingsStack.Navigator initialRouteName='Menu'
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />,
      }}
    >
      <SettingsStack.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
      <ClusterStack.Screen name="ListScreen" component={ListScreen} options={({ route }) => ({ title: route.params.name })} />
      <ClusterStack.Screen name="MapScreen" component={MapScreen} options={({ route }) => ({ title: route.params.name })} />

    </SettingsStack.Navigator>
  )
}

export default App;