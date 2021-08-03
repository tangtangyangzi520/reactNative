/*
 * @Descripttion: 
 * @Date: 2021-07-29 11:12:57
 * @LastEditTime: 2021-07-29 14:27:05
 * @LastEditors: kiki
 * @Author: Kiki
 */
import React, { Component } from 'react'
import { View } from 'react-native';
import Nav from './src/nav';
class App extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Nav></Nav>
            </View>
        )
    }
}

export default App;
