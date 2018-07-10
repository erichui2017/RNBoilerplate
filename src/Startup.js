/**
 * RN APP Demo
 * 启动
 * @flow
 */
import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator} from 'react-navigation';
// 启动页
import SplashScreen from 'react-native-splash-screen';
import VersionNumber from 'react-native-version-number';
import { Spinner } from 'native-base';

// 导入所有页面
import Welcome from './Welcome';
import Main from './components/Main';

const routeConfigs = { 
  Main: {screen:Main},
  Welcome: {screen:Welcome},
};

const stackNavigatorConfig = {
  initialRouteName: 'Main', 
  // 不带标题栏
  headerMode: 'none',
  // 这里可以对标题栏进行通用设置
  // 但是当某个页面也设置了 navigationOptions，则会失效，优先使用页面设置
}

const  AppStackNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);

// 通过SwitchNavigator 来实现切换路由,可以达到返回键不会回退回去的目的. 
// 导航到welcome, 是否显示welcome的逻辑在welcome中处理
const WelcomeStackNavigator = createSwitchNavigator(
  {
    Welcome: Welcome,
    App: AppStackNavigator,
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default class Startup extends Component {
  constructor() {
    super();
    this.state = {
      currentVersion: "0.0.0",
      isInit: false
    };
  }

  render() {
    if(this.state.isInit === true){
      // 先判断是否需要展示欢迎页
      return (this.state.currentVersion!==VersionNumber.appVersion? <WelcomeStackNavigator /> :<AppStackNavigator />)  
    } else {
      return <Spinner color='green' />
    }
  }

  
  componentDidMount() {
    if(this.state.isShowWelcome){
      SplashScreen.hide();
    } else {
      // js remote debug 模式下setTimeout不起作用
      if(__DEV__){
        SplashScreen.hide();
      } else {  
        this.splashScreenTimer = setTimeout(
          () => {
            SplashScreen.hide();
          },
          1000
        );
      }
    }
  }

  componentWillMount() {
    storage.load({
      key: 'currentVersion',
      // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
      autoSync: false,
      
      // syncInBackground(默认为true)意味着如果数据过期，
      // 在调用sync方法的同时先返回已经过期的数据。
      // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
      syncInBackground: true,
      
      // 你还可以给sync方法传递额外的参数
      // syncParams: {
      //   extraFetchOptions: {
      //   // 各种参数
      //   },
      //   someFlag: true,
      // },
    }).then(ret => {
      // 如果找到数据，则在then方法中返回
      // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
      // 你只能在then这个方法内继续处理ret数据
      // 而不能在then以外处理
      // 也没有办法“变成”同步返回
      // 你也可以使用“看似”同步的async/await语法
      this.setState({ currentVersion: ret.currentVersion,  isInit:true });
    }).catch(err => {
      //如果没有找到数据且没有sync方法，
      //或者有其他异常，则在catch中返回
      // console.warn(err.message);
      // switch (err.name) {
      //     case 'NotFoundError':
      //         // TODO;
      //         break;
      //       case 'ExpiredError':
      //           // TODO
      //           break;
      // }
      this.setState({ currentVersion: "0.0.0",  isInit:true });
    })
  }

  componentWillUnmount() { 
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.splashScreenTimer && clearTimeout(this.splashScreenTimer);
  }
}