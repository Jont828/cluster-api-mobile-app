import React from "react";
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import NotificationsList from '../components/NotificationsList';
import { SwipeListView } from 'react-native-swipe-list-view';

const Notifications = ({ route, navigation }) => {

  const aboutItems = {
    "Version": "0.1.0-alpha",
    "Authors": ["Jonathan Tong", "William Yao"]
  };

  const settingsItems = {
    "Theme": "Light",
    "Notifications": ["TODO"]
  };
  let listViewData = Array(20)
    .fill("")
    .map((_, i) => ({ key: `${i}`, text: `item #${i}` }));

  return (
    <ScrollView style={styles.wrapper}>
      <NotificationsList></NotificationsList>
    </ScrollView>
  );
}

export default Notifications;

const styles = StyleSheet.create({
  wrapper: {
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