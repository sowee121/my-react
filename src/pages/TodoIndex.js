import React, { Component } from 'react';
import '../style/page.scss';
import Todo from '../components/Todo';
import TodoList from '../components/TodoList';
import TodoFooter from '../components/TodoFooter';

export default class TodoIndex extends Component {
	render() {
		return (
			<div className="todoApp">
				<h1 className="todoTitle">todos</h1>
				<div className="todoMain">
					<Todo/ >
					<TodoList/ >
					<TodoFooter/ >
				</div>
			</div>
		)
	}
}