import React, { Component } from 'react';

export default class TodoFooter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			is_show: false
		}
	}
	// 鼠标移入，显示
	showCloseIcon() {
		this.setState({
			is_show: true
		})
	}
	// 鼠标移出，隐藏
	hideCloseIcon() {
		this.setState({
			is_show: false
		})	
	}
	// 改变当前任务完成状态
	toggleChange() {
		let isDone = !this.props.isDone;
		this.props.changeTodoState(this.props.index, isDone);
	}
	// 删除当前任务
	handlerDelete() {
		this.props.deleteTodo(this.props.index);	
	}

	render() {
		let closeIconClass = this.state.is_show ? "" : "is_hidden";
		return (
			<div className="todoItem" onMouseOver={this.showCloseIcon.bind(this)}  onMouseOut={this.hideCloseIcon.bind(this)}>
				<label>
					<i className={`ww-icon ww-icon-${this.props.isDone ? 'checked' : 'unchecked'}`} />
					<input type="checkbox" className="toggle" checked={this.props.isDone}  onChange={this.toggleChange.bind(this)}/>
				</label>
				<span className={`itemText ${this.props.isDone ? 'is-done' : ''}`}>{this.props.text}</span>
				{
					<i className={`close-item el-icon-close ${closeIconClass}`} onClick={this.handlerDelete.bind(this)}></i>
				}
			</div>
		)
	}
}