import React from 'react'
import msg_remind from '../../../../lib/app/img/home_msg_reminding.png'
import './index.less'
import Sign from '../sign/'

export default class HomeHeaderLogin extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loginType:'signin',
      isShowSign:false
    }
  }  
  changeSignState(state=false,type='signin'){
    this.setState({
      isShowSign:state,
      loginType:type
    });
  }

  render() {
    let login = null;
    let SignBox=this.state.isShowSign?<Sign changeState={this.changeSignState.bind(this)} type={this.state.loginType}></Sign>:'';
    
    return (
      <div className="pc-home-header-login">
          <div>
          {!login 
          ? 
            <span className="person-login"><span onClick={this.changeSignState.bind(this,true,'signup')}>注册</span>/<span onClick={this.changeSignState.bind(this,true,'signin')}>登录</span></span>
          :
            <img className="person-avatar" src={msg_remind}/>
          }
            <div className="msg">
              <img className="msg-remind" src={msg_remind} />
              <span className="msg-count">2</span>
            </div>
            
          </div>
          {SignBox}
      </div>
    )
  }
}


