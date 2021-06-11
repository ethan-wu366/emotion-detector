import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';

import Landing from './components/Landing';
import Error from './components/404';

function App() {
  return (
    <div className="App">
      <Router>
				<Switch>
					<Route path="/">
						<Landing />
					</Route>
					<Route default>
						<Error />
					</Route>
				</Switch>
			</Router>
    </div>
  );
}

export default App;
