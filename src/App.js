import './App.css';
import Login from '../src/componets/login/Login';
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom';
import Home from './componets/home/Home';
import React, { useEffect } from 'react';


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path={'/'} component={Login} />
					<Route  path={'/home'} component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
