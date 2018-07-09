
  import React, { Component } from 'react';
  import Swiper from 'react-native-swiper';
  import I18n from '../../../i18n';
  import {View, Image} from 'react-native';
  import { actions } from '../../../actions';
  import { connect } from "react-redux";
  import {bindActionCreators} from 'redux';

  class SlideShow extends Component {
    render() {
      let swiper = (this.props.slideShows.map((item, key) => {
        let imageURL = "../../../resource/images/"+item;
        return (
          <Image source={require('../../../resource/images/avatar.jpg')} />
        )
      }));   

      return (
        <Swiper
          // style={styles.swiper}          //样式
          height={200}                   //组件高度
          loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
          autoplay={true}                //自动轮播
          autoplayTimeout={4}                //每隔4秒切换
          horizontal={true}              //水平方向，为false可设置为竖直方向
          paginationStyle={{bottom: 10}} //小圆点的位置：距离底部10px
          showsButtons={false}           //为false时不显示控制按钮
          showsPagination={false}       //为false不显示下方圆点
          dot={
            <View style={{           //未选中的圆点样式
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 18,
              height: 18,
              borderRadius: 4,
              marginLeft: 10,
              marginRight: 9,
              marginTop: 9,
              marginBottom: 9,
            }}/>
          }
  
          activeDot={
            <View style={{    //选中的圆点样式
              backgroundColor: '#007aff',
              width: 18,
              height: 18,
              borderRadius: 4,
              marginLeft: 10,
              marginRight: 9,
              marginTop: 9,
              marginBottom: 9,
            }}/>
          }
        >
          {swiper}
        </Swiper>
      );
    }

    componentWillmount() {    
      // 获取slideshow数据
      this.props.getSlideShow();
    }
  }

const mapStateToProps = ({ slideShows}) => ({slideShows});
const mapDispatchToProps = (dispatch) => (bindActionCreators(actions.getSlideShow, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(SlideShow);