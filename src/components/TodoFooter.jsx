import React, { Component } from 'react';
export default class TodoFooter extends Component {

	// 绑定点击事件，清除已完成任务
    handlerClear(){
        this.props.clearDone();
	}
	
	render() {
		let footerStyle = this.props.todoCount ? {display: 'block'} : {display: 'none'};
		return (
			<div className="todoFooter" style={footerStyle}>
				<div className="todo-footer">
					<span className="left-item">{this.props.todoLeftCount} left / {this.props.todoCount} all</span>
					<ul className="todo-tabs">
						<li className="selected">All</li>
						<li>Active</li>
						<li>Completed</li>
					</ul>
					<span className="handle-clear" onClick={this.handlerClear.bind(this)}>Clear completed</span>
				</div>
				<div className="footer-papers"></div>
			</div>
		)
	}
}