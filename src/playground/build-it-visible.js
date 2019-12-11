class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		}
	}
	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			}
		})
	}

	render() {
		return (
			<div>
				<h1>Visiblity: {this.state.visibility ? 'true' : 'false'}</h1>
				<button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'hide' : 'show'}</button>
				{this.state.visibility &&
					<div>
						<p>Here are some details that you can now see.</p>
					</div>
				}
			</div>
		)
	}
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

//////////////////////////////////////////////////////////////////////////
/*
let visibility = false

const toggleVisibility = () => {
	visibility = !visibility
	render();
};

const appRoot = document.getElementById('app');

const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggleVisibility}>
				{visibility ? 'Hide details' : 'Show details'}
			</button>
			{visibility && (
				<div> 
					<p>Here are those elusive details</p>
				</div>
			)}
		</div>
	)
	
	ReactDOM.render(template, appRoot);
};

render();
*/