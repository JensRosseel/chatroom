import React from 'react';
import Jane from './jane';
import John from './john';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/John">
          <John />
        </Route>
        <Route path="/Jane">
          <Jane />
        </Route>
        <Route path="/">
          <div>
            <ul>
                <li><Link to="/John">John</Link></li>
                <li><Link to="/Jane">Jane</Link></li>
            </ul>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
