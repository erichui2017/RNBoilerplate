import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
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
    componentWillUnmount() {  
    }
}