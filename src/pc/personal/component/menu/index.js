import './index.less'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'


export default class Menu extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='menu-box'>
                <NavLink to='/recharge' className='menu-item' activeClassName='act'>充值缴费</NavLink>
                <NavLink to='/collect' className='menu-item' activeClassName='act'>个人收藏</NavLink>
                <NavLink to='/message' className='menu-item' activeClassName='act'>信息列表</NavLink>
                <NavLink to='/revise' className='menu-item' activeClassName='act'>修改资料</NavLink>
            </div>
            
        );
    }

}