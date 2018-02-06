import React, { Component } from 'react';
import {
  	BrowserRouter as Router,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

import { Menu } from 'element-react';
import TodoIndex from './TodoIndex';

const routes = [
	{ path: '/example1',
	  main: () => <TodoIndex/ >
	},
	{ path: '/example2',
	  main: () => <h2>example2</h2>
	},
	{ path: '/example3',
	  main: () => <h2>example3</h2>
	}
]

class MyNav extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
		const { location } = this.props;
		return (
			<Router>
				<div  style={{ display: 'flex' }}>
					<div style={{ width: '200px' }}>
						<Menu defaultActive={location.pathname} theme="dark" className="el-menu-vertical-demo" onSelect={this.onSelect.bind(this)}>
							<Menu.Item index="/example1"><i className="el-icon-message"></i><Link to="/example1">TODO</Link></Menu.Item>
							<Menu.Item index="/example2"><i className="el-icon-menu"></i><Link to="/example2">example2</Link></Menu.Item>					
							<Menu.Item index="/example3"><i className="el-icon-setting"></i><Link to="/example3">example3</Link></Menu.Item>
						</Menu>
					</div>
			
					<div style={{ flex: 1, padding: '10px 20px' }}>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								component={route.main}
							/>
						))}
					</div>
				</div>					
		  	</Router>
		)
	}

	onSelect(index, indexPath) {
		console.log(index, indexPath);
	}

	componentDidMount() {
		console.log(this.props.location)
	}

}

export default withRouter(MyNav);