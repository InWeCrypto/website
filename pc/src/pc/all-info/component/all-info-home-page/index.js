import React from 'react'

import {HashRouter as Router, Link, Route, hashHistory } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';


import AllInfoHomePageTextCard from '../all-info-home-page-text-card/index'
import AllInfoHomePageTextImgCard from '../all-info-home-page-text-img-card/index'
import AllInfoHomePageVideoCard from '../all-info-home-page-video-card/index'
import AllInfoAll from '../all-info-all/index'
import AllInfoText from '../all-info-text/index'
import AllInfoTextImg from '../all-info-text-img/index'
import AllInfoVideo from '../all-info-video/index'


import './index.less'

export default class AllInfoHomePage extends React.Component {
 
  constructor(props) {
    super(props)
    this.state = {
      choice: '全部',
      show: false
    }
  }
  mouseHandler = (e) => {
   this.setState({
     choice: e.target.innerHTML
    })
  }
  itemClickHandler = () => {
    this.setState({
      show: false
    })
  }
  listClickHandler = () => {
    this.setState({
      show: true
    })
  }
  render() {
    let { allInfo } = this.state
    const history = createBrowserHistory();
    return (
      <div className="pc-all-info-home-page">
        <div className="content">
        <div className="content-choice">
          <Router>
          <div>
          {this.state.choice}<span className="drop" onClick={this.listClickHandler}></span>
            <ul className="choice" style={{display: this.state.show ? 'block' : 'none'}}  onClick={this.itemClickHandler}>
              <li><Link onMouseOver={this.mouseHandler} to="/">全部</Link> </li>
              <li><Link onMouseOver={this.mouseHandler} to="/all-info-text-img">图文</Link></li>
              <li><Link onMouseOver={this.mouseHandler} to="/all-info-video">视频</Link></li>
              <li><Link onMouseOver={this.mouseHandler} to="/all-info-text">快讯</Link></li>
              </ul>
              <Route exact path="/" component={AllInfoAll}/>
              <Route path="/all-info-text" component={AllInfoText}/>
              <Route path="/all-info-text-img" component={AllInfoTextImg}/>
              <Route path="/all-info-video" component={AllInfoVideo}/>
            </div>
          </Router>
        </div>
        </div>
      </div>
    )
  }
}


