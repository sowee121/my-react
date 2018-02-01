import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const ParamsExample = () => (
  <Router>
    <div>
      <h2>Params</h2>
      <ul>
        <li><Link to="/react-example/1">React Router</Link></li>
        <li><Link to="/react-example/2">Redux</Link></li>
        <li><Link to="/react-example/3">react-router-dom</Link></li>
        <li><Link to="/react-example/4">react-native</Link></li>
      </ul>

      <Route path="/react-example/:id" component={Child}/>
    </div>
  </Router>
)

const Child = ({ match }) => (
  <div>
    <h3>id: {match.params.id}</h3>
    <p>path: {match.path}</p>
    <p>url: {match.url}</p>
  </div>
)

export default ParamsExample