import React from 'react';
import Paragraph from './components/Paragraph.js';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cat: 'Initial cat...'
		}

		this.getCat = this.getCat.bind(this);

	};

	getCat() {

		/* we need a `__moduleName` here to support relative urls. Spec is still incoming:

		https://github.com/systemjs/systemjs/blob/master/docs/module-formats.md#es6
		https://github.com/systemjs/systemjs/issues/1185#issuecomment-210865981

		*/

		const moduleName = 'Cat'

		System.import('./components/'+moduleName, __moduleName).then( CatModule => {
			let myCat = new CatModule.Cat('babu');
			this.setState({cat: myCat.meow()});
		})

	}

	render() {
			return (
			<div className="my-app">
				<h1>This is React!!!</h1>
				<Paragraph text="This is a demonstration of lazy loading" />
				<button onClick = {this.getCat}>Get a Cat</button>
				<Paragraph text={this.state.cat} />
			</div>
		);
	}

}
export default App;