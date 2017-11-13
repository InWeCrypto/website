import React from 'react'
import './index.less'

export default class HomeHeaderDynamicNewsContentText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '英国公司在名字里加入区块链后股价上涨 400%',
      content: '英国公司在名字里加入区块链后股价上涨 400%,英国公司在名字里加入区块链后股价上涨 400%...'
    }
  }
  render() {
    let { title, content } = this.props
    let t = title || this.state.title
    let c = content || this.state.content
    return (
      <div>
          <h3>{t}</h3>
          <p>{c}</p>
      </div>
    )
  }
}


