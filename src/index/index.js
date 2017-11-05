import React from 'react'
import ReactDOM from 'react-dom'
import PageD from '../page-d/index'
import {Router, Link, Route, hashHistory } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
export default class Home extends React.Component {
  render() {
    
    const history = createBrowserHistory();
    return (
      <div>
        <h1>Home page</h1>
        <a href="../page-a/index.html">pagea</a><br/>
        <a href="../page-c/index.html">pagec</a><br/>
        <a href="../page-d/index.html">paged</a><br/>
      </div>
    )
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
)

