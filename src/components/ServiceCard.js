import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card , Title, Subheading, Caption, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ServiceCard = ({route, navigation, kind, name, namespace, apiVersion, status, node }) => {
    let statusStyle = {}
    if (status) {
      statusStyle = eval("styles." + status);
    } else {
      statusStyle = {
        width: 0,
        marginRight: 5,
      }
    }
    return(
      <Card
        style={{margin: 10}}
        onPress={() => navigation.push("ResourceScreen",
          {
            namespace: namespace,
            name: name,
            kind: kind,
            apiVersion: "v1beta1",
            node: node
          })}
        >
        <View style={styles.cardContentWrapper}>
          <View style={[styles.leftWrap]}>
            <View style={[styles.leftStatus, statusStyle]} />
            <View style={styles.leftTextWrap}>
              <Title style={styles.title}>{kind}</Title>
              <Subheading style={styles.name}>{name}</Subheading>
            </View>
          </View>
          {/* <View style={[styles.leftText, eval("styles." + 'error')]} /> */}
          {/* <View style={[styles.rightTextWrap, eval("styles." + 'error')]}>
          </View> */}
          <View style={styles.rightWrap}>
            <Icon
              name="chevron-right"
              size={35}
              color='#888'
            />
          </View>

        </View>
      </Card>

      // <Card 
      //   style={[styles.card]}
      //   onPress={() => navigation.push("ResourceScreen",
      //     {
      //       namespace: namespace,
      //       name: name,
      //       kind: kind,
      //       apiVersion: "v1beta1",
      //       node: node
      //     })}
      // >
      //   <View styles={styles.cardContentWrapper}>
      //     <View style={[styles.leftWrap, eval("styles." + status)]} />
      //     <View style={[styles.leftWrap, eval("styles." + 'error')]} />
      //     {/* <View>
      //       <Text style={styles.title}>{kind}</Text>
      //       <Text style={styles.name}>{name}</Text>
      //     </View> */}
      //   </View>

      // </Card>
    )
}

export default ServiceCard

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    lineHeight: 16,
    fontStyle: 'italic',
    color: 'black',
  },
  success: {
    backgroundColor: '#4CAF50' // Success
  },
  warning: {
    backgroundColor: '#fb8c00' 
  },
  info: {
    backgroundColor: '#fb8c00' 
  },
  error: {
    backgroundColor: '#ff5252' 
  },
  leftWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftStatus: {
    // height: '100%',
    width: 15,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  leftTextWrap: {
    marginLeft: 10,
    paddingVertical: 10, // Use this to force the color blocks to expand
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rightWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardContentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  title: {
    display: 'inline-block'
    // marginLeft: 10,
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
  },
  chevronWrap: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [
      { translateY: -20 } // TODO: don't hard code this
    ]
  },
  chevron: {
    fontSize: 40,
    color: 'grey'
  },
});
