import React from 'react'
import HomeContentListItem from '../home-content-list-item/index'
import sortProject from '../../../lib/app/js/sort-project'
import Sortable from 'sortablejs'

import './index.less'

const w = 170;
const h = 364;
let arr = [];
export default class HomeContentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listArr: props.project||[]
    }
    
  }
  componentDidMount() {
    
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      listArr: nextProps.project.data
    })
  }
  componentDidUpdate(){
    var el = this.refs.list;
    if(!el){
      return;
    }
    var sortable = Sortable.create(el, {
      handler:'.group'
    });
    [].forEach.call(el.querySelectorAll('.group'), function (el){
      Sortable.create(el, {
        group: 'pc-home-content-list-item'
      });
    });

  }

  render() {
    if(this.state.listArr&&this.state.listArr.length>0)
    {
      let allData = sortProject(this.state.listArr);
      return (
        <div ref="list" className="pc-home-content-list">
          {
            allData && allData.map((item1,index) => {
              console.log(item1)
              return <div key={index} className='group'>
                { 
                  item1.map(item=>{
                   let style=this.size(item);
                   console.log(style)
                   return  <HomeContentListItem 
                           key = {item[0].id.toString()}
                           text = {item[0].id}
                         // transform = {`translate3d(${item[1].top} ${item[1].left})`}
                         // top = {item[1].top} left = {item[1].left
                           width = {style.width} 
                           height = {style.height}
                           >
                           
                         </HomeContentListItem>
                  })
                }
   
              </div>
              
            })
            
          }
        </div>
       )
    }else{
      return(<span></span>); 
    }
    

    
  }
  size = (item) =>{
    if(!item) return;
    var res={};
    switch(item[0].grid_type){
      case 1:
        res.width = w
        res.height = w
        break;
      case 2:
        res.width = w
        res.height = h
        break;
      case 3:
        res.width = h
        res.height = w
        break;
      case 4:
        res.width = h
        res.height = h
        break;
    }
    return res;
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