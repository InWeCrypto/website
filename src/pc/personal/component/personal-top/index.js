import './index.less'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'





export default class PersonalTop extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='personal-top'>
                <div className='header-img'>
                    <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1492893920,1731698997&fm=173&s=DAB404C7426325134D3DFCA303007011&w=218&h=146&img.JPG"/>
                </div>
                <div className='info-box'>
                    <div className='info-item'>ID: 53423232</div>
                    <div className='info-item'>昵称: 山鸡山鸡山鸡</div>
                    <div className='info-item'>
                        <span className='c-item'>收藏&nbsp;&nbsp;&nbsp;&nbsp;4</span>
                        <span className='c-item'>站内消息&nbsp;&nbsp;&nbsp;&nbsp;4</span>
                        <span className='c-item member'>体验会员</span>
                        <span className='c-item'>3天后到期</span>
                    </div>
                </div>
            </div>
        )
    }
   
}