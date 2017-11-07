import React from 'react'
import msg_remind from '../../lib/app/img/home_msg_reminding.png'
import './index.less'

export default class HomeHeaderLogin extends React.Component {
  render() {
    let login = null
    return (
      <div className="pc-home-header-login">
        {!login 
        ? 
          <div>
            <img className="msg-remind" src={msg_remind} />
            <span className="person-login">注册/登录</span>
          </div>
        :
        <div>
          <img className="person-avatar" src={msg_remind}/>
          <img className="msg-remind" />
          <span className="before-icon"></span>
        </div>
        }
      </div>
    )
  }
}


