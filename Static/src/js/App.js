import React from 'react';
import Paragraph from './components/Paragraph';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cat: 'Initial cat...'
		}

		this.getCat = this.getCat.bind(this);

	};

	getCat() {

		System.import( 'Static/src/js/components/Cat' ).then( CatModule => {
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