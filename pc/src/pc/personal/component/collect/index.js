import './index.less'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'




export default class Collect extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='collect-box'>
                <div className='collect-item'>
                    <img className='item-img' src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3998212076,2971941061&fm=173&s=1806D7100AA872011D1488DC0300C0B1&w=218&h=146&img.JPEG"/>
                    <div className='item-content'>
                        <h3 className='title'>这是一个标题这是一个标题这是一个标题这是一个标题</h3>
                        <div className='cont'></div>
                        <div className='ctrl'>
                            <span className='ctrl-item'>2017-09-11 09:10:11&nbsp;&nbsp;&nbsp;&nbsp;|</span>
                            <span className='ctrl-item'>阅读：10&nbsp;&nbsp;&nbsp;&nbsp;|</span>
                            <span className='ctrl-item'>回复：20&nbsp;&nbsp;&nbsp;&nbsp;|</span>
                            <span className='ctrl-item'>已收藏</span>
                        </div>
                    </div>
                </div>
                <div className='collect-item sp'>
                    <h3 className='title'>快讯：少时诵诗书所所所所所所所</h3>
                    <div className='ctrl'>
                        <span className='ctrl-item'>2017-09-11 09:10:11&nbsp;&nbsp;&nbsp;&nbsp;|</span>
                        <span className='ctrl-item'>阅读：10&nbsp;&nbsp;&nbsp;&nbsp;|</span>
                        <span className='ctrl-item'>回复：20&nbsp;&nbsp;&nbsp;&nbsp;|</span>
                        <span className='ctrl-item'>已收藏</span>
                    </div>
                </div>
            </div>
        );
    }
}