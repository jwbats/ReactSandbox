var Number = React.createClass({
	
	getStyle : function() {
		return {
		  backgroundColor: 'rgb(0, 0, ' + this.state.number + ')'
		};
	},

	getInitialState: function() {
		return {
			number: this.props.initialNumber
		};
	},

	clickIncrease : function() {
		this.setState({
			number: (this.state.number + 1) % 256
		});
	},

	render: function() {
		var divStyle = this.getStyle();
		
		return (<div className="clsNumber" style={divStyle} onClick={this.clickIncrease}>{this.state.number}</div>);
	}

});

var Numbers = React.createClass({
	
	render: function() {
		var numbers = [];
		var initialNumber = 0;
		
		for (var i = 0; i < this.props.count; i++) {
			numbers.push(<Number initialNumber={initialNumber} />);
			initialNumber += this.props.increment;
		}
		
		return (<div>{numbers}</div>);
	}
	
});

ReactDOM.render(
	<Numbers count={64} increment={4} />,
	document.getElementById('divNumbers')
);