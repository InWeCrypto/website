import './index.less'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import defaultHeader from '../../../lib/app/img/defaultheader.png'
import caram from '../../../lib/app/img/caram.png'
import revise from '../../../lib/app/img/revise.png'

export default class Revise extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className='revise-box'>
                <div className='header-box'>
                    <div className='headerimg'>
                        <img src={defaultHeader} />
                        <img src={caram} className='caram' />
                    </div>
                </div>
                <div className='revise-item'>
                    <span className='name'>手机号</span>
                    <div className='revise-ctrl'>
                        <span>手机号</span>
                        <span className='revisebtn'>
                            <img src={revise} />
                        </span>
                    </div>
                    <span className='name'></span>
                </div>
                <div className='revise-item'>
                    <span className='name'>昵称</span>
                    <div className='revise-ctrl'>
                        <span>昵称</span>
                        <span className='revisebtn'>
                            <img src={revise} />
                        </span>
                    </div>
                    <span className='name'></span>
                </div>
                <div className='revise-item'>
                    <span className='name'>密码</span>
                    <div className='revise-ctrl'>
                        <span>密码</span>
                        <span className='revisebtn'>
                            <img src={revise} />
                        </span>
                    </div>
                    <span className='name'></span>
                </div>
                <div className='revise-item'>
                    <span className='name'>微信登录</span>
                    <div className='revise-ctrl'>
                        <span>微信登录</span>
                        <span className='revisebtn'>
                            <img src={revise} />
                        </span>
                    </div>
                    <span className='name'></span>
                </div>


            </div>
        );
    }
}


