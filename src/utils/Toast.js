/*
 * @Descripttion: 
 * @Date: 2021-07-30 15:05:08
 * @LastEditTime: 2021-07-30 15:16:42
 * @LastEditors: kiki
 * @Author: Kiki
 */
import React from 'react'
import {ActivityIndicator} from "react-native"
import {Toast,Theme} from "teaset"
let customKey = null;

Toast.showLoading=(text)=> {
  if (customKey) return;
  customKey = Toast.show({
    text,
    icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
    position: 'center',
    duration: 100000,
  });
}

Toast.hideLoading=()=> {
  if (!customKey) return;
  Toast.hide(ToastExample.customKey);
  customKey = null;
}

export default Toast;