import React, { PureComponent } from 'react'
import { StyleSheet, View, Alert, TouchableOpacity, Image, TouchableHighlight, Dimensions } from 'react-native'
import { Button, ListItem, Left, Right, Body, Thumbnail, Text, Icon } from 'native-base'

const { width, height } = Dimensions.get('window')

export default class FlatListGrid extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const rowID = this.props.index
    const rowData = this.props.item
    return (
      <TouchableOpacity onPress={() => this.props.onPress('GridView', rowID, rowData)}>
        <View style={{ margin: 0.5, width: width / 3, paddingBottom: 15 }}>
          {/* <Thumbnail square source={logo} style={styles.gridThumb} /> */}
          <Text>ID: {rowID}</Text>
          <Text>{rowData}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}