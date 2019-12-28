import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom'
import './index.css'
/*
 请写一个满足以下要求的confirm方法组件：
（1）能在任意组件(示例如下)的componentDidMount生命周期中挂载，并返回一个promise；
（2）能通过该promise返回的结果判断confirm组件是否成功挂载。
 */
function Popup({close,resolve,reject,title,content}){
    console.log('==')
    return (
        <div>
            <div className="box_outside"></div>
            <div className="box">
                <div className="box_tip">{title}</div>
                <div className="box_content">{content}</div>
                <div className="footer">
                    <button className="btn confirm" onClick={e=>{
                        resolve()
                        close()
                    }}>确认</button>
                    <button className="btn"  onClick={e=>{
                        reject()
                        close()
                    }}>取消</button>
                </div>
            </div>

        </div>
    )
}


function  confirm ({title,content}){
    let div = document.createElement('div');
    document.body.appendChild(div);
    return new Promise((resolve,reject)=>{
        render(
            <Popup 
            close={e=>{
                document.body.removeChild(div)
                unmountComponentAtNode(div)
            }}  
            resolve={resolve}  
            reject={reject} 
            title={title}
            content={content}
            />,div
        )
    })
}

export default confirm 