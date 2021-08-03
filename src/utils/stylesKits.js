/*
 * @Descripttion: 
 * @Date: 2021-07-29 14:42:51
 * @LastEditTime: 2021-07-29 14:54:03
 * @LastEditors: kiki
 * @Author: Kiki
 */

// 设计稿的宽度/元素的宽度=手机屏幕/手机元素的宽度
// 手机元素的宽度=手机屏幕*元素的宽度/设计稿的宽度(375)

import {Dimensions} from "react-native"
export const screenwidth=Dimensions.get("window").width;
export const screenHeight=Dimensions.get("window" ).height;
/**
 * @description: px转Dp
 * @param elePx 元素的宽度或高度
 */
export const pxToDp=(elePx)=>screenwidth * elePx / 375;