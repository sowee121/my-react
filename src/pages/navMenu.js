import React, { Component } from 'react';
import {
  	BrowserRouter as Router,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

import { Menu, Icon } from 'antd';
import Todos from './TodoIndex';

const routes = [
	{ path: '/example1',
	  main: () => <Todos/ >,
	  exact: true
	},
	{ path: '/example2',
	  main: () => <h2>example2</h2>,
	  exact: true
	},
	{ path: '/example3',
	  main: () => <h2>example3</h2>,
	  exact: true
	}
]

class MyNav extends Component {
	render() {
		return (
			<Router>
				<div style={{ display: 'flex' }}>
					{/*菜单*/}
					<div style={{ width: '200px' }}>
						<Menu defaultSelectedKeys={['1']} onClick={this.handleClick}>
							<Menu.Item key="1"><Link to="/example1"><Icon type="mail" />example1</Link></Menu.Item>
							<Menu.Item key="2"><Link to="/example2"><Icon type="appstore" />example2</Link></Menu.Item>
							<Menu.Item key="3"><Link to="/example3"><Icon type="setting" />example3</Link></Menu.Item>
						</Menu>
					</div>
					{/*路由容器*/}
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

	handleClick(e) {
		console.log(e);
	}

	componentDidMount() {
		console.log(this.props)
	}
}

export default withRouter(MyNav);