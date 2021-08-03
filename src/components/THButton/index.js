/*
 * @Descripttion:
 * @Date: 2021-07-30 18:23:29
 * @LastEditTime: 2021-07-30 19:13:14
 * @LastEditors: kiki
 * @Author: Kiki
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Index extends Component {
    static defaultProps={
        style:{},
        textStyle:{}
    }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress()} style={{width:"100%",height:"100%",...this.props.style,overflow:'hidden'}}>
        <LinearGradient start={{x:0,y:0}} start={{x:1,y:0}}
          colors={['#A46FCE', '#E27590']}
          style={styles.linearGradient}>
          <Text style={{...styles.buttonText,...this.props.textStyle}}>{this.props.children}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

// Later on in your styles..
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    color:"#fff",
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Index;
