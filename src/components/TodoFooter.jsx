import React, { Component } from 'react';
export default class TodoFooter extends Component {

	// 绑定clear点击事件，清除已完成任务
    handlerClear(){
        this.props.clearDone();
	}

	render() {
		let footerStyle = this.props.todoCount > 0 ? {display: 'block'} : {display: 'none'};
		return (
			<div className="todoFooter" style={footerStyle}>
				<div className="todo-footer">
					<span className="left-item">{this.props.todoLeftCount} left / {this.props.todoCount} all</span>
					{
						this.props.todoDoneCount > 0 && <span className="handle-clear" onClick={this.handlerClear.bind(this)}>Clear completed</span>
					}
				</div>
				<div className="footer-papers"></div>
			</div>
		)
	}
}