import React, { Component } from 'react';

export default class Todo extends Component {
	render() {
		return (
			<div className="todoInput">
				<i className="toggle-all el-icon-arrow-down"></i> <input className="newTodo" placeholder="What needs to be done?"/ >
			</div>
		)
	}
}