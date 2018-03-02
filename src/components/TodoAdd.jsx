import React, { Component } from 'react';

export default class Todo extends Component {
	// 绑定回车事件，添加新任务
	handlerEnter(event){
		if(event.keyCode === 13) {
			let inputValue = event.target.value.trim();
			if(!inputValue) return false;

			let newTodoItem = {
				text: inputValue,
				isDone: false
			}
			event.target.value = "";
			this.props.addTodo(newTodoItem);
		}
	}

	// 处理全选与全不选的状态
    handlerAllChecked(event){
		this.props.changeTodoState(null, event.target.checked, true);
    }

	render() {
		let allCheckedStyle = this.props.todoCount > 0 ? {visibility: "visible"} : {visibility: "hidden"}
		return (
			<div className="todoInput">
				<label className="toggle-all" style={allCheckedStyle}>
					<input type="checkbox" checked={this.props.isAllChecked} onChange={event => this.handlerAllChecked(event)} />	
					<i className="el-icon-arrow-down"></i>
				</label>
				<input onKeyUp={event => this.handlerEnter(event)} className="newTodo" placeholder="What needs to be done?"/ >
			</div>
		)
	}
}