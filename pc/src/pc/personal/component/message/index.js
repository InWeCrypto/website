import './index.less'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import mailpng from '../../../lib/app/img/mail.png'

export default class Message extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='message-box'>
                <div className='message-item'>
                    <div className='imgbox'>
                        <img className='img' src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3633752704,2709935623&fm=173&s=3394C5208E45910D39A8E1C30300E0B1&w=218&h=146&img.JPG" />                  
                    </div>
                    <div className='message-cont'>
                        <div className='cont'>
                            <span className='co_red'>小梁</span>评论了你：
                            <span>你是一个逗比</span>
                        </div>
                        <div className='time'>2017-09-08 11：11：11</div>
                    </div>
                </div>
                <div className='message-item sys'>
                    <div className='imgbox'>
                        <img className='img' src={mailpng} />                  
                    </div>
                    <div className='message-cont'>
                        <div className='cont'>
                            系统消息：您已经成为会员
                        </div>
                        <div className='time'>2017-09-08 11：11：11</div>
                    </div>
                </div>
            </div>
        );
    }

}


