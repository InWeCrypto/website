import React from 'react'
import ReactDOM from 'react-dom'

export default class PageA extends React.Component {
  render() {
    return (
      <div>
        <h1>Phone---------Page---------AAAAAAAAAAAAAAAaa--------</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <PageA />,
  document.getElementById('root')
)

