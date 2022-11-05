import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { List } from 'react-native-paper';
import { Avatar, Button, Card } from 'react-native-paper';
import { Caption, Headline, Paragraph, Subheading, Text, Title, Divider, Chip, Dialog, Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardRow from './CardRow';

const StatusCard = ({ conditions, items, route, navigation }) => {
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const showDialog = () => {setDialogVisible(true) };
  const hideDialog = () => {setDialogVisible(false) };

  const [selectedCondition, setSelectedCondition] = React.useState(conditions[0]);
  
  const getIcon = (condition) => {
    if (condition.status === 'True')
      return "check-circle"

    switch(condition.severity.toLowerCase()) {
      case "info":
        return "info-circle";
      case "warning":
      case "error":
        return "alert-circle";
      default:
        return "help-circle";
    }
  };
  const getColor = (condition) => {
    if (condition.status === 'True')
      return "#4CAF50"

    switch(condition.severity.toLowerCase()) {
      case "info":
      case "warning":
        return '#fb8c00'
      case "error":
        return '#ff5252'
    }
  };
  return (
    <Card>
      <Card.Content style={styles.cardContent}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            conditions.map((condition, index) => {
              return (
                <Chip 
                  key={index}
                  style={styles.chip}
                  icon={() => (
                  <Icon name={getIcon(condition)} size={20} color={getColor(condition)} />
                  )}
                  onPress={() => {showDialog(); setSelectedCondition(condition)}}
                >{ condition.type }</Chip>
              )
            })
          }
        </View>
        <View>
          {
            items.map((item, index) => {
              return (
                <View key={index}>
                  <Divider></Divider>
                  <CardRow 
                    name={item.name}
                    value={item.value}
                    valueType={item.valueType}
                    route={route}
                    navigation={navigation}
                    icon={item.icon}
                    iconSize={item.iconSize}
                    iconColor={item.iconColor}
                  />
                </View>
              )
            })
          }
        </View>
      </Card.Content>
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={hideDialog}>
          <Dialog.Title>{selectedCondition.type}: {selectedCondition.status}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Last Transition Time: {selectedCondition.lastTransitionTime}</Paragraph>
            {
              selectedCondition.status !== 'True' ? (
                <View>
                  <Paragraph>Severity: {selectedCondition.severity}</Paragraph>
                  <Paragraph>Reason: {selectedCondition.reason}</Paragraph>
                  <Paragraph>Message: {selectedCondition.message}</Paragraph>
                </View>
              ) : null
            }
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => {hideDialog()}}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Card>
  );
}

export default StatusCard;

const styles = StyleSheet.create({
  chip: {
    marginBottom: 8,
    marginRight: 8,
  },
  cardContent: {
    paddingBottom: 5,
  },
  chevronWrap: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [
      { translateY: -5 } // TODO: don't hard code this
    ]
  },
  chevron: {
    fontSize: 40,
    color: 'grey'
  },
  provider: {
    marginLeft: 10,
    fontSize: 20,
    color: '#2196F3'
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});