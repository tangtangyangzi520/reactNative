/*
 * @Descripttion: 
 * @Date: 2021-07-29 18:24:42
 * @LastEditTime: 2021-07-30 14:11:20
 * @LastEditors: kiki
 * @Author: Kiki
 */
/**
 * @description:
 * @param{Number}
 */
export default{
    validatePhone(phone){
        // return true
        const reg =/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/; 
        return reg.test(phone)
    }
}