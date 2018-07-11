  import React, { Component } from 'react';
  // 'react-native-swiper' 没人维护，弃用
  import Carousel, { ParallaxImage, Pagination  } from 'react-native-snap-carousel';
  import I18n from '../../../i18n';
  import { StyleSheet, View, Text, TouchableOpacity, Image, TouchableHighlight, Dimensions } from 'react-native'
  
  const { width, height } = Dimensions.get('window')
  export default class SlideShow extends Component {
    _renderItem ({item, index}, parallaxProps) {
      return (
        <View 
          style={{
            height:200,
            // flex: 1, 不能设置为自动flex，否则显示不出来
            justifyContent: 'center',
            backgroundColor: '#97CAE5'
          }}
        >
          <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate("Fire")} >
            <ParallaxImage
                source={{ uri: item.imgUrl }}
                containerStyle={{width: width, height:150, backgroundColor:'red'}}
                style={{marginLeft: 2, marginRight: 2, flex:1, width: '100%', height: '100%'}}
                parallaxFactor={0.4}
                {...parallaxProps}
            />
            <Text style={{color: "green"}} numberOfLines={2}>
                { item.imgTitle }
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    get pagination () {
      const { slideShows, activeSlide } = this.state;
      return (
          <Pagination
            dotsLength={slideShows.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)'
            }}
            inactiveDotStyle={{
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
      );
    }

    render () {
        return (
          <View>
            <Carousel
                data={this.state.slideShows}
                renderItem={this._renderItem}
                hasParallaxImages={true}
                ref={(c) => { this._carousel = c; }}
                sliderWidth={width}
                itemWidth={width}
                sliderHeight={200}
                onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                
                loop={true}
                lockScrollWhileSnapping={true}
                autoplay={true}
            />
            { this.pagination }
          </View>
        );
    }

    constructor() {
      super();
      this.state = {
        slideShows: [],
        activeSlide: 0
      };

      this._renderItem = this._renderItem.bind(this);
    }

    componentWillMount() {    
      // 获取slideshow数据
      storage.load({
        key: 'slideShows'
      }).then(ret => {
        this.setState({slideShows: ret});
      }).catch(err => {
        console.warn(err.message);
      })
    }
  }