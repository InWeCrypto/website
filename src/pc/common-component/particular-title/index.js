import React from 'react'
import './index.less'

export default class ParticularTitle extends React.Component {
  render() {
    return (
      <div className="pc-particular-title">
        <h2>Kyber network （KNC)</h2>
        <h4>上线交易中</h4>
        <div className="change-page">
        <a className="change-page-prev"></a>
        <a className="change-page-next"></a>
        </div>
      </div>
    )
  }
}


