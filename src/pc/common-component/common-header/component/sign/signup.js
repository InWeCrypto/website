import './sign.less'

import React,{Component} from 'react';
import ReactDom from 'react-dom';

import user from '../../../../lib/app/img/signuser.png'
import mail from '../../../../lib/app/img/signmail1.png'
import code from '../../../../lib/app/img/signlock1.png'
import password from '../../../../lib/app/img/signlock.png'
import password2 from '../../../../lib/app/img/signlock2.png'

export default class SignUp extends Component{
    constructor(props){
        super(props);
    }
    goView(type){        
        this.props.changeState(true,type)
    }
    render(){
        return(
            <div className='signup'>
                <div className='sign-item'>
                    <div className='icon-box'>
                        <img src={user} />
                    </div>
                    <div className='input-box'>
                        <input className='input' placeholder='昵称' type="text"/>
                    </div>
                </div>
                <div className='sign-item code'>
                    <div className='icon-box'>
                        <img src={code} />
                    </div>
                    <div className='input-box'>
                        <input className='input' placeholder='请输入你的邮箱' type="text"/>
                        <span className='sign-btn'>发送验证码</span>
                    </div>
                </div>
                <div className='sign-item'>
                    <div className='icon-box'>
                        <img src={mail} />
                    </div>
                    <div className='input-box'>
                        <input className='input' placeholder='请输入你的邮箱验证码' type="text"/>
                    </div>
                </div>
                <div className='sign-item'>
                    <div className='icon-box'>
                        <img src={password} />
                    </div>
                    <div className='input-box'>
                        <input className='input' placeholder='设置您的密码' type="password"/>
                    </div>
                </div>
                <div className='sign-item'>
                    <div className='icon-box'>
                        <img src={password2} />
                    </div>
                    <div className='input-box'>
                        <input className='input' placeholder='再次确认您的密码' type="password"/>
                    </div>
                </div>
                <div className='sign-item'>
                    <button className='sign-btn'>注册</button>
                </div>
                <div className='sign-item tl'>
                    <span className='return' onClick={this.goView.bind(this,'signin')}>去登录</span>
                </div>
            </div>
        )
    }

}