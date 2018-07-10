import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import VersionNumber from 'react-native-version-number';
import I18n from './i18n';

import { setSpText, scaleSize } from './util';

const styles = StyleSheet.create({
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: scaleSize(320),
      height: scaleSize(320),
    }
});

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        // this.state = {  
        // };

        // this.gotoHomePage = this.gotoHomePage.bind(this);
    }

    gotoHomePage = () =>{   
        const {navigate} = this.props.navigation;
        navigate('Main')
    }

    render() {
        const pageArray = [{
          key: 'somethun-dos',
          title: 'Page 1',
          text: 'Description 1',
          img: 'https://goo.gl/Bnc3XP',
          imageStyle: styles.image,
          backgroundColor: '#fa931d',
          fontColor: '#fff',
          level: 10,
        }, {
          title: 'Page 2',
          description: 'Description 2',
          img: require('./resource/images/back.png'),
          imageStyle: styles.image,
          backgroundColor: '#a4b602',
          fontColor: '#fff',
          level: 10,
        }];

        return ( 
            <AppIntroSlider
              slides={pageArray}
              onDone={this.gotoHomePage}
              onSkip={this.gotoHomePage}
              renderDoneButton={this._renderDoneButton}
              renderNextButton={this._renderNextButton}
              skipLabel={I18n.t('welcome.skip')}
              doneLabel={I18n.t('welcome.done')}
              nextLabel={I18n.t('welcome.next')}
            //   prevLabel={I18n.t('prev')}
            />
        );
    }

    // 定制按钮
    // _renderNextButton = () => {
    //     return (
    //       <View style={styles.buttonCircle}>
    //         <Ionicons
    //           name="md-arrow-round-forward"
    //           color="rgba(255, 255, 255, .9)"
    //           size={24}
    //           style={{ backgroundColor: 'transparent' }}
    //         />
    //       </View>
    //     );
    //   }
    //   _renderDoneButton = () => {
    //     return (
    //       <View style={styles.buttonCircle}>
    //         <Ionicons
    //           name="md-checkmark"
    //           color="rgba(255, 255, 255, .9)"
    //           size={24}
    //           style={{ backgroundColor: 'transparent' }}
    //         />
    //       </View>
    //     );
    // }

    componentWillMount() {
        
    }
    componentDidMount() {
        // 使用key来保存数据（key-only）。这些数据一般是全局独有的，需要谨慎单独处理的数据
        // 批量数据请使用key和id来保存(key-id)，具体请往后看
        // 除非你手动移除，这些数据会被永久保存，而且默认不会过期。
        storage.save({
            key: 'currentVersion',  // 注意:请不要在key中使用_下划线符号!
            data: { 
            currentVersion: VersionNumber.appVersion,
            },
            // 如果不指定过期时间，则会使用defaultExpires参数
            // 如果设为null，则永不过期
            // expires: 1000 * 3600
            expires: null
        });
    }
    componentWillUnmount() {  
    }
}