import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoFooter extends Component {
	// 遍历任务列表，转发props
	render() {
		return (
			<div className="todoList">
				{
					this.props.todos.map((todo, index) => {
						return <TodoItem key={index} {...todo} index={index} {...this.props}/>
					})
				}
			</div>
		)
	}
}