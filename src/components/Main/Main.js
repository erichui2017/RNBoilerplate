import React, { Component } from 'react';
// import { Container } from 'native-base';
import MainTabNavigator from './MainTabNavigator';


import { Container, Content, Text, StyleProvider,Footer, FooterTab, Button, Icon,  Badge } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

class Main extends Component {
  render() {
    return ( 
      <StyleProvider style={getTheme(material)}>
      <Container> 
        <MainTabNavigator />
      </Container>    
      </StyleProvider>
    );
  }
}

export default Main;