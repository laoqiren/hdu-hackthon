import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Team from './components/Team';
import Menber from './components/Menber';
import { Route,IndexRoute,Router, browserHistory } from 'react-router'


ReactDOM.render(
<Router>
  <Route path="/" component={App}>
    <IndexRoute component={Menber}/>
    <Route path="/team" component={Team}/>
  </Route>
</Router>,document.getElementById('container'));