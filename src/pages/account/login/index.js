/*
 * @Descripttion:
 * @Date: 2021-07-29 13:48:25
 * @LastEditTime: 2021-08-02 19:02:24
 * @LastEditors: kiki
 * @Author: Kiki
 */
import React, {Component} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {pxToDp} from '../../../utils/stylesKits';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import validator from '../../../utils/validator';
import request from '../../../utils/request';
import {ACCOUNT_LOGIN} from '../../../utils/pathMap';
import THButton from '../../../components/THButton';

class Index extends Component {
  state = {
    phoneNumber: '156216566',
    phoneValid: true,
  };
  //输入触发
  phoneChangeText = phoneNumber => {
    this.setState({phoneNumber});
  };
  //点击完成是触发(回车触发)
  phoneNumberSubmitEditing = async () => {
    const {phoneNumber} = this.state;
    const phoneValid = validator.validatePhone(phoneNumber);
    if (!phoneValid) {
      this.setState({phoneValid: phoneValid});
      return;
    }
    const res = await request.post(ACCOUNT_LOGIN, {
      phone: phoneNumber,
    });
    console.log('点击完成是触发', res);
  };
  handlerPress=()=>{
  }
  render() {
    const {phoneNumber, phoneValid} = this.state;
    return (
      <View>
        {/* {0.0状态栏 开始} */}
        <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
        {/* {0.0状态栏 结束} */}

        {/* 1.0背景图片 开始 */}
        {/* 200 单位 dp 单位px->dp单位 */}
        <Image
          style={{width: '100%', height: pxToDp(200)}}
          source={require('../../../res/cover.jpg')}></Image>
        {/* 背景图片 结束 */}

        {/* {2.0 内容 结束} */}
        <View style={{padding: pxToDp(20)}}>
          {/* {2.1登录 开始} */}
          <View>
            {/* 标题 */}
            <Text
              style={{fontSize: pxToDp(25), color: '#888', fontWeight: 'bold'}}>
              手机号登录注册
            </Text>
            {/* 输入框 */}
            <View style={{marginTop: pxToDp(30)}}></View>
            <Input
              placeholder="请输入手机号码"
              maxLength={11}
              keyboardType="phone-pad"
              value={phoneNumber}
              inputStyle={{color: '#333'}}
              onChangeText={this.phoneChangeText}
              errorMessage={phoneValid ? '' : '手机号码格式不正确'}
              onSubmitEditing={this.phoneNumberSubmitEditing}
              leftIcon={{
                type: 'font-awesome',
                name: 'phone',
                color: '#ccc',
                fontSize: pxToDp(20),
              }}
            />
          </View>
          <View>
            <View style={{width:"85%",height:40,alignSelf:"center"}}>
              <THButton onPress={this.handlerPress} style={{borderRadius:20}}>获取验证码</THButton>
            </View>
          </View>

          {/* {2.1登录 结束} */}
        </View>
        {/* {2.0 内容 开始} */}
      </View>
    );
  }
}
export default Index;
