import React from 'react'
import HomeContentListItem from '../home-content-list-item/index'
import sortProject from '../../lib/app/js/sort-project'
import Sortable from 'sortablejs'

import './index.less'

const w = 170;
const h = 364;
let arr = [];
export default class HomeContentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listArr: []
    }
  }
  componentDidMount() {
    var el = this.refs.list
    var sortable = Sortable.create(el, {
      draggable: '.pc-home-content-list-item',
    })
  }
  render() {
    let { project } = this.props
    if(project){
      let allData = sortProject(project.data)
      allData.map((item, i) => {
        item.map(i => {
          arr.push(i)
        })
      })
      this.size(arr)
    }
    return (
     <div ref="list" className="pc-home-content-list">
       {
         arr && arr.map(item => {
           return  <HomeContentListItem 
                    key = {item[0].id.toString()}
                    text = {item[0].id}
                  // transform = {`translate3d(${item[1].top} ${item[1].left})`}
                    width = {item[1].width} height = {item[1].height} top = {item[1].top} left = {item[1].left}
                     >
                    
                  </HomeContentListItem>
         })
       }
     </div>
    )
  }
  size = (arr) =>{
    if(!arr) return
    arr.map(item => {
      switch(item[0].grid_type){
        case 1:
          item[1].width = w
          item[1].height = w
          break;
        case 2:
          item[1].width = w
          item[1].height = h
          break;
        case 3:
          item[1].width = h
          item[1].height = w
          break;
        case 4:
          item[1].width = h
          item[1].height = h
          break;
      }
    })
  }
 

}







































// return (
//   <div className="pc-home-content-list">
//     {
//       project && project.data.map(item => {
//         <HomeContentListItem 
//           key = {item.id}
//           grid_type = {item.grid_type}
//           text = {item.name}
//         />
//       })
//     }
//   </div>
// )