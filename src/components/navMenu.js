import React, { Component } from 'react';
import { Menu }  from 'element-react';

class MyNav extends Component {
	render() {
		return (
			<div>
				<Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
					<Menu.Item index="1">路由基本使用</Menu.Item>
					<Menu.Item index="2">URL参数</Menu.Item>					
					<Menu.Item index="3">自定义链接</Menu.Item>
				</Menu>
  			</div>
		)
	}

	onSelect(index, indexPath) {
		console.log(index, indexPath);
	}
}

export default MyNav;