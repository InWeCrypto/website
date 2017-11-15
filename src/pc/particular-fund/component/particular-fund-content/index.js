import React from 'react'
import { getData, switchCard } from '../../../lib/app/js/app'
import { PORTOCAL } from '../../../lib/app/js/env'
import ParticularFundCurrent from '../particular-fund-current/index'
import ParticularFundDetail from '../particular-fund-detail/index'

import './index.less'


export default class ParticularFundContent extends React.Component {
  
  render() {
    let { info } = this.props
    return (
      <div className="pc-particular-fund-content">
        <ParticularFundCurrent />
        <ParticularFundDetail />
      </div>
    )
  }
}



