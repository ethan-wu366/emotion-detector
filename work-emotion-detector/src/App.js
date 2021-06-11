import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';
import logo from './logo.svg';
import './css/App.css';

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
