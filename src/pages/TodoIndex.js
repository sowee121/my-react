import React, { Component } from 'react';
import '../style/page.scss';
import Utils from '../utils/index';
import TodoAdd from '../components/TodoAdd';
import TodoList from '../components/TodoList';
import TodoFooter from '../components/TodoFooter';

export default class TodoIndex extends Component {
	constructor(props){
		super(props);
		this.state = {
			todos: Utils.getCookie("todos") || [],
			isAllChecked: false
		};
	}

	// 判断是否所有任务的状态都完成，同步全选框
	allChecked(){
		let isAllChecked = false;
		if(this.state.todos.every((todo)=> todo.isDone)){
			isAllChecked = true;
		}
		this.setState({
			todos: this.state.todos, 
			isAllChecked
		});
	}
	
	// 添加任务，是传递给TodoAdd组件的方法，参数是一个object
	addTodo(todoItem){
		this.state.todos.push(todoItem);
		this.allChecked();
		Utils.setCookie('todos',this.state.todos);
	}
	
	// 删除当前的任务，传递给TodoItem组件的方法，参数index是下标
	deleteTodo(index){
		this.state.todos.splice(index, 1);
		this.setState({
			todos: this.state.todos
		});
		Utils.setCookie('todos', this.state.todos);
	}

	// 清除已完成的任务，传递给TodoFooter组件的方法
	clearDone(){
		let todos = this.state.todos.filter(todo => !todo.isDone);
		this.setState({
			todos,
			isAllChecked: false
		});
		Utils.setCookie('todos', todos);
	}

	 // 改变任务状态，传递给TodoItem和TodoFooter组件的方法，参数index是下标，isDone是完成状态，isChangeAll是控制全部状态的
	changeTodoState(index, isDone, isChangeAll=false){ // 参数isChangeAll默认为false
		if(isChangeAll){
			this.setState({
				todos: this.state.todos.map((todo) => {
					todo.isDone = isDone;
					return todo;
				}),
				isAllChecked: isDone
			})
		}else{
			let todos = this.state.todos;
			todos[index].isDone = isDone;
			this.setState({
				todos
			})
			this.allChecked();
		}
		Utils.setCookie('todos', this.state.todos);
	}

	render() {
		let otherProps = {
			todoCount: this.state.todos.length || 0,
			todoLeftCount: (this.state.todos && this.state.todos.filter((todo)=>!todo.isDone)).length || 0,
			todoDoneCount: (this.state.todos && this.state.todos.filter((todo)=>todo.isDone)).length || 0,
		};
		return (
			<div className="todoApp">
				<h1 className="todoTitle">todos</h1>
				<div className="todoMain">
					<TodoAdd addTodo={this.addTodo.bind(this)}  changeTodoState={this.changeTodoState.bind(this)} isAllChecked={this.state.isAllChecked}  {...otherProps}/>
					<TodoList todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)}/>
					<TodoFooter clearDone={this.clearDone.bind(this)} {...otherProps} />
				</div>
			</div>
		)
	}
}