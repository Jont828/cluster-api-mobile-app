import React from "react";
import { ScrollView, Text, StyleSheet, View, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import NotificationsList from '../components/NotificationsList';
import { SwipeListView } from 'react-native-swipe-list-view';

const NotificationScreen = ({ route, navigation }) => {

  return (
    // <ScrollView style={styles.wrapper}>
    <NotificationsList
      route={route}
      navigation={navigation}
    />
    // </ScrollView>
  );
}

export default NotificationScreen;

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  rowFront: {
    height: 50,
    marginVertical: 10,
  },
  rowBack: {
    height: 50,
    marginVertical: 10,
  }
});