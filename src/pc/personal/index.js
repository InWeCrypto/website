import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import {HashRouter as Router } from 'react-router-dom'

import CommonHeader from '../common-component/common-header/index'
import Page from './component/page/'

import './index.less'

export default class Personal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Router>
                <div className='personal_box'>
                    <CommonHeader />
                    <Page></Page>
                </div>
            </Router>           
        )
    }  
}
ReactDOM.render(
    <Personal />,
    document.getElementById('root')
  )