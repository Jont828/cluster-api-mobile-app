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
      "icon": "information",
      "iconSize": 20,
      "iconColor": "#1976D2",
    },
    {
      "name": "Authors",
      "value": [
        {"name": "Jonathan Tong"}, {"name": "William Yao"}
      ],
      "valueType": "list",
      "icon": "account",
      // "icon": "account-circle",
      // "icon": "pencil",
      "iconSize": 20,
      "iconColor": "#1976D2",
    },
    {
      "name": "GitHub",
      "value": "https://github.com/Jont828/cluster-api-mobile-app",
      "valueType": "link",
      "icon": "github",
      // "icon": "account-circle",
      // "icon": "pencil",
      "iconSize": 20,
      "iconColor": "#1976D2",
    },
  ]

  const settingsItems = [
    {
      "name": "Theme",
      "value": [
        "Light", "Dark"
      ],
      "valueType": "menu",
      "icon": "brightness-6",
      "iconSize": 20,
      // "iconColor": "#555",
    },
    {
      "name": "Enable Something Random",
      "valueType": "switch",
      "icon": "help-circle",
      "iconSize": 20,
      "iconColor": "#1976D2",
    },
    {
      "name": "Notifications",
      "value": [
        {"name": "TODO"}
      ],
      "valueType": "list",
      "icon": "bell",
      "iconSize": 20,
      "iconColor": "#1976D2",

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