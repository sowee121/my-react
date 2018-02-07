import React, { Component } from 'react';

export default class TodoFooter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			is_show: false
		}
	}
	showCloseIcon() {
		this.setState({
			is_show: true
		})
	}
	hideCloseIcon() {
		this.setState({
			is_show: false
		})	
	}

	render() {
		const isVisibile = this.state.is_show;
		return (
			<div className="todoItem" onMouseOver={this.showCloseIcon.bind(this)}  onMouseOut={this.hideCloseIcon.bind(this)}>
				<input type="checkbox" className="toggle"/>
				<label className="itemText">todolist one</label>
				{
					isVisibile ? (<i className="close-item el-icon-close"></i>) : (<i className="close-item el-icon-close is_hidden"></i>) 
				}
			</div>
		)
	}
}