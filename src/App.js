import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import 'antd/dist/antd.min.css'
import './App.scss';

import NavMenu from './pages/navMenu';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<div className="App-main">
					<BrowserRouter>
						<NavMenu />
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default App;