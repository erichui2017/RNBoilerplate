import React, { Component } from "react";
import { Keyboard } from 'react-native';
import { connect } from "react-redux";
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
// import { BottomTabBar } from 'react-navigation-tabs';
import I18n from '../../../i18n';

/**
 *自定义tab导航组件, 增加了对键盘的友好处理。
 *
 * @class TabComponent
 * @extends {Component<Prop, State>}
 */

type Prop = {};
type State = { visible: boolean };

class TabComponent extends Component<Prop, State> {
  state: State = { visible: true };

  componentDidMount() {
    this.kbShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
    this.kbHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
  }

  keyboardWillShow = () => {
    // console.log('keyboardwillshow');
    this.setState({ visible: false });
  };

  keyboardWillHide = () => {
    // console.log('keyboardwillhide');
    this.setState({ visible: true });
  };

  componentWillUnmount() {
    this.kbShowListener.remove();
    this.kbHideListener.remove();
  }

  // render() {
  //   return this.state.visible && <BottomTabBar {...this.props} />;
  // }

  render() {
    let index = this.props.navigation.state.index;

    return this.state.visible && (
        <Footer>
          <FooterTab>
            <Button
              badge 
              vertical
              active={index === 0}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              {this.props.mainTabHomeBadge!==0? <Badge><Text>{this.props.mainTabHomeBadge}</Text></Badge> : <Text></Text>}
              <Icon type="SimpleLineIcons" name="home" />
              <Text>{I18n.t('MainTab.home')}</Text>
            </Button>
            <Button
              vertical
              active={index === 1}
              onPress={() => this.props.navigation.navigate("Fire")}
            >
              <Icon type="SimpleLineIcons" name="fire" />
              <Text>{I18n.t('MainTab.fire')}</Text>
            </Button>
            <Button
              vertical
              active={index === 2}
              onPress={() => this.props.navigation.navigate("Newest")}
            >
              <Icon type="SimpleLineIcons" name="drop" />
              <Text>{I18n.t('MainTab.newest')}</Text>
            </Button>
            <Button
              vertical
              active={index === 3}
              onPress={() => this.props.navigation.navigate("Mine")}
            >
              <Icon type="SimpleLineIcons" name="user" />
              <Text>{I18n.t('MainTab.mine')}</Text>
            </Button>
          </FooterTab>
        </Footer>
    );;
  }
}

const mapStateToProps = state => ({
    mainTabHomeBadge: state.mainTabHomeBadge,
  });
  
// TODO:增加清理事件
// const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch));
export default connect(mapStateToProps)(TabComponent);