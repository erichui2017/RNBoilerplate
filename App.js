// /**
//  * RN APP Demo
//  * 这里设置APP一些基本属性
//  * @flow
//  */
import React, { Component } from 'react';
import codePush from 'react-native-code-push';
// // 控制横屏 
import Orientation from 'react-native-orientation';
import { Provider } from "react-redux";
import store from "./src/store/";

import Startup from './src/Startup';
import storage from './src/util/Storage';

// 启动页
import SplashScreen from 'react-native-splash-screen'


// TODO:后台更新启动页
// 全局变量
global.storage = storage;

/**
 *
 *
 * @class App
 * @extends {Component<Props>}
 */
type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        {/* <App1 /> */}
        <Startup />
      </Provider>
    );
  }

  constructor() {
    super();
    // this.state = {
    // };
  }

  componentWillMount() {
    // The getOrientation method is async. It happens sometimes that
    // you need the orientation at the moment the JS runtime starts running on device.
    // `getInitialOrientation` returns directly because its a constant set at the
    // beginning of the JS runtime.
    const initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      // do something
    } else {
      // do something else
    }

    // 只允许竖屏
    Orientation.lockToPortrait();
    //只允许横屏
    // Orientation.lockToLandscape();

    // // 设置字体
    // await Expo.Font.loadAsync({
    //   Roboto: require("native-base/Fonts/Roboto.ttf"),
    //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    //   Ionicons: require("native-base/Fonts/Ionicons.ttf")
    // });
  }

  componentDidMount() {
    // this locks the view to Portrait Mode
    Orientation.lockToPortrait();

    // this locks the view to Landscape Mode
    // Orientation.lockToLandscape();

    // this unlocks any previous locks to all Orientations
    // Orientation.unlockAllOrientations();

    Orientation.addOrientationListener(this._orientationDidChange);

  }

  _orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      // do something with landscape layout
    } else {
      // do something with portrait layout
    }
  }

  componentWillUnmount() {    
    if(__DEV__){
      Orientation.getOrientation((err, orientation) => {
        console.log(`Current Device Orientation: ${orientation}`);
      });
    }

    // Remember to remove listener
    Orientation.removeOrientationListener(this._orientationDidChange);
  }
}

// export default App;
export default App = codePush(App);