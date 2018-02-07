import React, { Component } from 'react';
export default class TodoFooter extends Component {
	render() {
		return (
			<div className="todoFooter">
				<div className="todo-footer">
					<span className="left-item">3 items left</span>
					<ul className="todo-tabs">
						<li className="selected">All</li>
						<li>Active</li>
						<li>Completed</li>
					</ul>
					<span className="handle-clear">Clear completed</span>
				</div>
				<div className="footer-papers"></div>
			</div>
		)
	}
}