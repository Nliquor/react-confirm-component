import React,{Component} from 'react';
import { render, unmountComponentAtNode } from 'react-dom'
import './index.css'
/*
 请写一个满足以下要求的confirm方法组件：
（1）能在任意组件(示例如下)的componentDidMount生命周期中挂载，并返回一个promise；
（2）能通过该promise返回的结果判断confirm组件是否成功挂载。
 */

function confirm(state){
    return new Promise((resolve, reject)=>{
       if(state){
        resolve(true)
       }else{
        reject(false)    
       }
    })
}

export default confirm;