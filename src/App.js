import React from 'react';  
import './App.css';
import ToDo from './ToDo.js';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
	}

	render() {
		return (
			<div className="Home">
				<ToDo />
			</div>
		);
	}
}
