import React, {Component} from 'react';
import ComponentOne from './components/component-one';
import ComponentTwo from './components/component-two';

class Main extends Component {
	render() {
			return (
			<div className="my-app">
				<h1>This is React!!!</h1>
				<ComponentOne />
				<ComponentTwo />
			</div>
		);
	}
}
export default Main;