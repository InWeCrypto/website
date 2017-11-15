import React from 'react'
import './index.less'

export default class ParticularTitle extends React.Component {
  render() {
    let fund = true
    let { title, score } = this.props
    return (
      <div className="pc-particular-title">
        {fund && 
        <div className="risk-level">
          <p>风险等级: <span className="high"></span>&nbsp; 极高</p>
          <p>风险等级: <span className="middle"></span>&nbsp; 中</p>
        </div>
      }
        <h2>Kyber network （KNC)</h2>
        <h4>{title} <span style={{color: '#ff3232'}}>{score}</span></h4>
        <div className="change-page">
          <a className="change-page-prev"></a>
          <a className="change-page-next" href="../../particular-fund"></a>
        </div>
      </div>
    )
  }
}


