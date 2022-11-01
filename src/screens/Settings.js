import React from "react";
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import InfoCard from '../components/InfoCard';

const Settings = ({route, navigation}) => {
  
  const aboutItems = [
    {
      "name": "Version",
      "value": "0.1.0-alpha",
      "valueType": "text",
    },
    {
      "name": "Authors",
      "value": [
        {"name": "Jonathan Tong"}, {"name": "William Yao"}
      ],
      "valueType": "list",
    },
  ]

  const settingsItems = [
    {
      "name": "Theme",
      "value": "Light",
      "valueType": "text",
    },
    {
      "name": "Notifications",
      "value": [
        {"name": "TODO"}
      ],
      "valueType": "list",
    },
  ]
  
  return (
    <ScrollView style={styles.wrapper}>
      <Card.Title title="About"></Card.Title>
      <InfoCard route={route} navigation={navigation} items={aboutItems} />

      <Card.Title title="General"></Card.Title>
      <InfoCard route={route} navigation={navigation} items={settingsItems} />
    </ScrollView>
  );
}

export default Settings;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});