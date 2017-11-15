import React from 'react'
import './index.less'
export default class HomeContentListItem extends React.Component {
  constructor(props){
    super(props);
    this.state={
      width:props.width||0,
      height:props.height||0,
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      width:nextProps.width||0,
      height:nextProps.height||0,
    })
  }
  render() {
    let {width,height,top, left, text} = this.props
    return (
      <div className="pc-home-content-list-item" 
        style={{width: `${this.state.width}px`, height: `${this.state.height}px`}} 
      >
        {text}
      </div>
    )
  }
}






