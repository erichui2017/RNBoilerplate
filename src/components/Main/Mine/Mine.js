import React, { Component } from "react";
import { AppRegistry, Alert } from "react-native";
import I18n from '../../../i18n';

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1
} from "native-base";

import { StackNavigator } from "react-navigation";
// import EditScreenOne from "./EditScreenOne.js";
// import EditScreenTwo from "./EditScreenTwo.js";

export default class Mine extends Component {
//   componentDidMount() {
//     if (this.props.navigation.state.params !== undefined) {
//       Alert.alert("USER found", this.props.navigation.state.params.name);
//     }
//   }
  render() {
    return (
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Show User profiles here</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            // onPress={() => this.props.navigation.navigate("EditScreenOne")}
          >
            <Text>Goto EditScreen One</Text>
          </Button>
        </Content>
    );
  }
}

Mine.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <Header>
        <Left>
          {/* <Button transparent onPress={() => navigation.navigate("DrawerOpen")}> */}
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};