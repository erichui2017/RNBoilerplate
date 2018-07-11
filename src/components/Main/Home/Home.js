import React, { Component } from 'react';

import { Container } from 'native-base';

import SearchBar from './SearchBar';
import SlideShow from './SlideShow';
import RefreshList from './RefreshList';


export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        {/* navigation不是传递给所有组件；而是只有screen组件会自动接收该属性 */}
        <SearchBar navigation={this.props.navigation} />
        <SlideShow navigation={this.props.navigation} />
        <RefreshList navigation={this.props.navigation} />
      </Container>
    );
  }
}
