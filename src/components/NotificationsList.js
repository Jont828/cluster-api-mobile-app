import React, { useState } from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';
import { Card, Subheading, Paragraph, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


let arrayData = [
  {
    key: '0',
    kind: 'Cluster',
    name: 'my-cluster',
    namespace: 'my-namespace',
    time: "",
    ago: "5 min",
    message: "Cluster provisioned successfully",
  },
  {
    key: '1',
    kind: 'AzureMachinePool',
    name: 'my-amp',
    namespace: 'my-namespace',
    time: "",
    ago: "15 min",
    message: "AzureMachinePool failed to create replicas",
  },
]

const rowSwipeAnimatedValues = {};
Array(arrayData.length)
.fill('')
.forEach((_, i) => {
  rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
});

export default function NotificationsList({ navigation, route }) {
  const [listData, setListData] = useState(
    arrayData
    // Array(20)
    //   .fill('')
    //   .map((_, i) => ({ key: `${i}`, text: `${i}` }))
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const onSwipeValueChange = swipeData => {
    const { key, value } = swipeData;
    rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  const renderItem = data => (
    <Card
      onPress={() => {
        navigation.navigate("ClustersTab", { screen: "ResourceScreen", params: { name: data.item.name, namespace: data.item.namespace } })
      }}
      style={styles.rowFront}
      // underlayColor={'#AAA'}
    >
      <Card.Content style={{
        // backgroundColor: 'red',
      }}>
        <View style={{
          // backgroundColor: 'grey',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Title style={{
            // fontSize: 20,
          }}>
            {data.item.kind}
          </Title>
          <Paragraph style={{
            lineHeight: 30, // TODO: is this right
            // textAlign: 'right',
            color: '#666',
          }}>
            {data.item.ago}
          </Paragraph>
        </View>

        <View style={{
          // backgroundColor: 'grey',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Subheading style={styles.name}>{data.item.name}</Subheading>
          <Subheading style={{ fontSize: 16, color: '#666' }}>{data.item.namespace}</Subheading>
        </View>
        
        {/* <Subheading style={styles.name}>my-cluster-{data.item.text}</Subheading>
        <Caption style={styles.name}>my-namespace</Caption> */}
        <Paragraph>{data.item.message}</Paragraph>
      </Card.Content>
    </Card>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backLeftBtn]}
        onPress={() => closeRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Left</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => closeRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <Animated.View
          style={[
            styles.trash,
            {
              transform: [
                {
                  scale: rowSwipeAnimatedValues[
                    data.item.key
                  ].interpolate({
                    inputRange: [45, 90],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        >
          <Icon name="delete" size={24} color="white"></Icon>
          {/* <Image
            source={require('../images/trash.png')}
            style={styles.trash}
          /> */}
        </Animated.View>
      </TouchableOpacity>
    </View>
  );

  return (
    // <View style={styles.container}>
      <SwipeListView
        style={styles.list}
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
        onSwipeValueChange={onSwipeValueChange}
        recalculateHiddenLayout={true}
      />
    // </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  container: {
    // padding: 10,
    backgroundColor: 'transparent',
    flex: 1,
  },
  name: {
    // marginTop: 0,
    fontSize: 16,
    fontStyle: 'italic',
    color: 'black',
    // backgroundColor: 'red',
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    // alignItems: 'center',
    // backgroundColor: '#CCC',
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
    // justifyContent: 'center',
    height: 120,
    marginBottom: 10,
    // marginVertical: 5,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    marginBottom: 10,
    borderRadius: 3,
    // borderRadius: 10,
    // marginVertical: 5,

  },
  backLeftBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    backgroundColor: '#1976D2',
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: '#1976D2',
    right: 75,
  },
  backRightBtnRight: {
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    backgroundColor: '#ff5252',
    right: 0,
  },
  trash: {
    height: 25,
    width: 25,
  },
});