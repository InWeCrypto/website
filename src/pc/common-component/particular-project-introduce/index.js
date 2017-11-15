import React from 'react'
import { switchCard } from '../../lib/app/js/app'
import './index.less'

export default class ParticularProjectIntroduce extends React.Component {
  constructor(props){
    console.log(props)
    super(props)
    this.state = {
      text: props.data.intro
    }
  }
  switchHandler1 = (e) => {
    switchCard('introduce-title-active',e);
    this.setState({
      text: this.props.data.intro
    })
  }
  switchHandler2 = (e) => {
    switchCard('introduce-title-active',e);
    this.setState({
      text: this.props.data.point
    })
  }
  switchHandler3 = (e) => {
    switchCard('introduce-title-active',e);
    this.setState({
      text: this.props.data.team
    })
  }
  
  switchHandler4 = (e) => {
    switchCard('introduce-title-active',e);
    this.setState({
      text: this.props.data.example
    })
  }
  onClick = (e) =>{
    switchCard('introduce-title-active',e)
  }
  render() {
    let { data } = this.props
    return (
      <div className="pc-particular-project-introduce">
       <ul className="introduce-title-list">
        <li onClick={this.switchHandler1} className="introduce-title introduce-title-active">项目介绍</li>
        <li onClick={this.switchHandler2} className="introduce-title">针对痛点</li>
        <li onClick={this.switchHandler3} className="introduce-title">团队介绍</li>
        <li onClick={this.switchHandler4} className="introduce-title" style={{border: 'none'}}>应用案例</li>
       </ul>
       <div className="introduce-text">{this.state.text}</div>
      </div>
    )
  }
}


