import './sign.less'

import React,{Component} from 'react';
import ReactDom from 'react-dom';

import user from '../../../../lib/app/img/signuser.png'
import mail from '../../../../lib/app/img/signmail1.png'
import code from '../../../../lib/app/img/signlock1.png'
import password from '../../../../lib/app/img/signlock.png'
import password2 from '../../../../lib/app/img/signlock2.png'

export default class SignIn extends Component{
    constructor(props){
        super(props);
    }
    goView(type){        
        this.props.changeState(true,type)
    }
    render(){
        return(
            <div className='signin'>
                <div className='sign-item'>
                    <div className='icon-box'>
                        <img src={mail} />
                    </div>
                    <div className='input-box'>
                        <input className='input' placeholder='请输入你的邮箱' type="text"/>
                    </div>
                </div>
                <div className='sign-item'>
                    <div className='icon-box'>
                        <img src={password} />
                    </div>
                    <div className='input-box'>
                        <input className='input' placeholder='密码' type="password"/>
                    </div>
                </div>
                <div className='sign-item'>
                    <button className='sign-btn'>登录</button>
                </div>
                <div className='sign-item'>
                    <div className='more-box'>
                        <a className='a right' href="javascript:void(0)" onClick={this.goView.bind(this,'signup')}>注册</a>
                        <a className='a left' href="javascript:void(0)" onClick={this.goView.bind(this,'forget')}>忘记密码？</a>
                    </div>
                </div>
            </div>
        );
    }
}