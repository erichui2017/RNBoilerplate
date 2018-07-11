import React, { PureComponent } from 'react'
import { Button, ListItem, Left, Right, Body, Thumbnail, Text, Icon } from 'native-base'

/**
 * 
 *
 * @export
 * @class flatListItem
 * @extends {PureComponent}
 */
export default class FlatListItem extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const rowID = this.props.index
    const rowData = this.props.item
    return (
      <ListItem thumbnail>
        <Left>
          {/* <Thumbnail square source={"../../../../resource/images/avatar.jpg"} /> */}
        </Left>
        <Body style={{ borderBottomWidth: 0 }}>
          <Text>RowID: {rowID}</Text>
          <Text note>Data: {rowData}</Text>
        </Body>
        <Right style={{ borderBottomWidth: 0 }}>
            <Button
              small
              transparent
              title="view"
              onPress={() => this.props.onPress('chat', rowID, rowData)}
            >
              <Icon name="chatbubbles"  />
            </Button>
            <Button
              small
              transparent
              title="view"
              onPress={() => this.props.onPress('like', rowID, rowData)}
            >
              <Icon name="heart"/>
            </Button>
            <Button
              small
              transparent
              title="view"
              onPress={() => this.props.onPress('share', rowID, rowData)}
            >
              <Icon name="share"/>
            </Button>
        </Right>
      </ListItem>
    )
  }
}