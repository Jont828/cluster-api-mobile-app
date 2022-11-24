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
      "iconColor": "#43A047",
    },
    {
      "name": "GitHub Repo",
      "value": "https://github.com/Jont828/cluster-api-mobile-app",
      "valueType": "link",
      "icon": "github",
      // "icon": "account-circle",
      // "icon": "pencil",
      "iconColor": "#000",
    },
  ]

  const statusSettings = [
    {
      "name": "Ready",
      "valueType": "switch",
      "icon": "check-circle",
      "iconColor": "#43A047",
    },
    {
      "name": "Info",
      "valueType": "switch",
      "icon": "information",
      "iconColor": "#1976D2",
    },
    {
      "name": "Warnings",
      "valueType": "switch",
      "icon": "alert",
      "iconColor": "#fb8c00",
    },
    {
      "name": "Errors",
      "valueType": "switch",
      "icon": "alert-octagon",
      "iconColor": "#ff5252",
    }
  ]

  const settingsItems = [
    {
      "name": "Theme",
      "value": [
        "Light", "Dark"
      ],
      "valueType": "menu",
      "icon": "brightness-6",
      "iconColor": "#6A1B9A",
    },
    // {
    //   "name": "Enable Something Random",
    //   "valueType": "switch",
    //   "icon": "help-circle",
    //   "iconColor": "#1976D2",
    // },
    {
      "name": "Notifications",
      "value": [
          {
            "name": "Mute all",
            "valueType": "switch",
            "icon": "bell-off",
            "iconColor": "#F44336",
          },
          {
            "name": "Clusters",
            "value": statusSettings,
            "valueType": "list",
            "icon": "kubernetes",
            "iconColor": "#1976D2",
          },
          {
            "name": "Infra Clusters",
            "value": statusSettings,
            "valueType": "list",
            "icon": "sitemap",
            // "icon": "cloud",
            "iconColor": "#1976D2",
          },
          {
            "name": "Control Plane",
            "value": statusSettings,
            "valueType": "list",
            "icon": "controller-classic",
            // "icon": "controller",
            "iconColor": "#1976D2",
          },
          {
            "name": "Add-ons",
            "value": statusSettings,
            "valueType": "list",
            "icon": "puzzle",
            "iconColor": "#1976D2",
          },
          {
            "name": "Machine Deployments",
            "value": statusSettings,
            "valueType": "list",
            "icon": "layers-triple",
            // "icon": "monitor-multiple",
            "iconColor": "#1976D2",
          },
          {
            "name": "Machine Sets",
            "value": statusSettings,
            "valueType": "list",
            "icon": "layers",
            // "icon": "widgets",
            "iconColor": "#1976D2",
          },
          {
            "name": "Machine Pools",
            "value": statusSettings,
            "valueType": "list",
            "icon": "database",
            "iconColor": "#1976D2",
          },
          {
            "name": "Machines",
            "value": statusSettings,
            "valueType": "list",
            "icon": "cube",
            // "icon": "monitor",
            "iconColor": "#1976D2",
          },
          {
            "name": "Infra Machines",
            "value": statusSettings,
            "valueType": "list",
            // "icon": "monitor",
            // "icon": "desktop-tower",
            "icon": "server",
            "iconColor": "#1976D2",
          },
          {
            "name": "Bootstrap Configs",
            "value": statusSettings,
            "valueType": "list",
            // "icon": "monitor",
            "icon": "application-cog",
            // "icon": "server",
            "iconColor": "#1976D2",
          },
      ],
      "valueType": "list",
      "icon": "bell-badge",
      "iconColor": "#F44336",

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