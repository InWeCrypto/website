import './index.less'
import React,{Component} from 'react'

import {Switch,Route } from 'react-router-dom'

import closeBtn from '../../../../lib/app/img/close.png'

import SignUp from './signup'
import SignIn from './signin'
import Forget from './forget'

export default class Sign extends Component{
    constructor(props){
        super(props);
        this.state={
            type:props.type||'signin',
            isShow:props.isShow||false
        }
    }
    
    closeBtn(){
        this.props.changeState();
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            type: nextProps.type,
            isShow:nextProps.isShow
        });
    }
    render(){
        let type=this.state.type;
        let box,title;
        switch(type){
            case 'signup':
                title='注册'
                box = <SignUp changeState={this.props.changeState}></SignUp>;     
            break;
            case 'forget':
                title='忘记密码'
                box=<Forget changeState={this.props.changeState}></Forget>
            break;
            default:
                title='登录'
                box=<SignIn changeState={this.props.changeState}></SignIn>;       
        }       
        return(
            <div className='sign-box'>
                <div className='sign-bg'></div>
                <div className='sign-container'>
                    <div className='sign-title'>
                        <span>{title}</span>
                        <img className='sign-close' onClick={this.closeBtn.bind(this)} src={closeBtn} />
                    </div>   
                    <div className='sign-content'>
                        {box}
                    </div>        
                </div>
            </div>
        );
    }
}




