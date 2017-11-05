import app from 'app/js/app.js'
import React from 'react'
import ReactDOM from 'react-dom'

export default class PageD extends React.Component {
  render() {
    return (
      <div>
        <h1>Page---------DDDDD--------</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <PageD />,
  document.getElementById('root')
)

