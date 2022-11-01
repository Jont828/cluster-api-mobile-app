import React from "react";
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import InfoCard from '../components/InfoCard';

const Settings = ({route, navigation}) => {
  
  const aboutItems = {
    "Version": "0.1.0-alpha",
    "Authors": ["Jonathan Tong", "William Yao"]
  };

  const settingsItems = {
    "Theme": "Light",
    "Notifications": ["TODO"]
  };
  
  return (
    <ScrollView style={styles.wrapper}>
      <Card.Title title="About"></Card.Title>
      <InfoCard route={route} navigation={navigation} values={aboutItems} />

      <Card.Title title="General"></Card.Title>
      <InfoCard route={route} navigation={navigation} values={settingsItems} />
    </ScrollView>
  );
}

export default Settings;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});