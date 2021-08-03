/*
 * @Descripttion: 
 * @Date: 2021-07-29 11:12:57
 * @LastEditTime: 2021-07-30 18:21:01
 * @LastEditors: kiki
 * @Author: Kiki
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpReque;
AppRegistry.registerComponent(appName, () => App);
