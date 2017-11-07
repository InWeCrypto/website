//import app from 'app/js/app.js'
import React from 'react'
import ReactDOM from 'react-dom'

export default class PageC extends React.Component {
  render() {
    return (
      <div>
        <h1>Page---------AAAAAAAAAAAAAAAaa--------</h1>
        <a href="../page-d/index.html">PageD</a>
      </div>
    )
  }
}

ReactDOM.render(
  <PageC />,
  document.getElementById('root')
)

