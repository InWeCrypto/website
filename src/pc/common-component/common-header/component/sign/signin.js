import './sign.less'

import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { getData } from '../../../../lib/app/js/app'
import { PORTOCAL } from '../../../../lib/app/js/env'


import user from '../../../../lib/app/img/signuser.png'
import mail from '../../../../lib/app/img/signmail1.png'
import code from '../../../../lib/app/img/signlock1.png'
import password from '../../../../lib/app/img/signlock.png'
import password2 from '../../../../lib/app/img/signlock2.png'

export default class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    goView(type){        
        this.props.changeState(true,type)
    }
    signinClick(){
        let email=this.state.email;
        let password=this.state.password;
        getData(`${PORTOCAL}/user/login`,'POST',{
            email:email,
            password:password
        }).then(data=>{
            console.log(data)
        })


    }
    inputChange(type,e){
        let data={};
        data[type]=e.target.value;
        this.setState(data)
    }
    render(){
        return(
            <div className='signin'>
                <div className='sign-item'>
                    <div className='icon-box'>
                        <img src={mail} />
                    </div>
                    <div className='input-box'>
                        <input value={this.state.email} onChange={this.inputChange.bind(this,'email')} className='input' placeholder='请输入你的邮箱' type="text"/>
                    </div>
                </div>
                <div className='sign-item'>
                    <div className='icon-box'>
                        <img src={password} />
                    </div>
                    <div className='input-box'>
                        <input value={this.state.password} onChange={this.inputChange.bind(this,'password')} className='input' placeholder='密码' type="password"/>
                    </div>
                </div>
                <div className='sign-item'>
                    <button className='sign-btn' onClick={this.signinClick.bind(this)}>登录</button>
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