import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './app.css';
import Navbar from './layout/Navbar';
import Home from './pages/home.page';
import CreateJob from './pages/createJob.page';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
          <Route exact path="/">
					  <Home />
          </Route>
          <Route exact path="/job/create">
					  <CreateJob />
          </Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
