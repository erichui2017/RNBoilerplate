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
        <SearchBar />
        <SlideShow />
        <RefreshList />
      </Container>
    );
  }
}
