import React, { Component } from 'react';
import {
  BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
  
import { Menu, Button, Badge}  from 'element-react';

const ButtonGroup = () => (
	<div>
		<div style={{ padding: '20px 0' }}>
			<Button plain={true} type="success">成功按钮</Button>
			<Button plain={true} type="warning">警告按钮</Button>
			<Button plain={true} type="danger">危险按钮</Button>
			<Button plain={true} type="info">信息按钮</Button>
		</div>
	</div>
)
const BadgeGroup = () => (
	<div>
		<Badge value={ 200 } max={ 99 } style={{marginRight: '50px'}}>
			<Button size="small">评论</Button>
		</Badge>
		<Badge value={ 'hot' }>
			<Button size="small">回复</Button>
		</Badge>
	</div>
)

const routes = [
	{ path: '/',
	  exact: true,
	  main: ButtonGroup
	},
	{ path: '/badge',
	  main: BadgeGroup
	},
	{ path: '/example',
	  main: () => <h2>example</h2>
	}
]

class MyNav extends Component {
	render() {
		return (
			<Router>
			<div  style={{ display: 'flex' }}>
				<div style={{ padding: '10px',width: '200px' }}>
					<Menu  defaultActive="1" className="el-menu-vertical-demo" mode="vertical" onSelect={this.onSelect.bind(this)}>
						<Menu.Item index="1"><i className="el-icon-message"></i><Link to="/">菜单一</Link></Menu.Item>
						<Menu.Item index="2"><i className="el-icon-menu"></i><Link to="/badge">菜单二</Link></Menu.Item>					
						<Menu.Item index="3"><i className="el-icon-setting"></i><Link to="/example">菜单三</Link></Menu.Item>
					</Menu>
				</div>
		
				<div style={{ flex: 1, padding: '10px' }}>
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
}

export default MyNav;