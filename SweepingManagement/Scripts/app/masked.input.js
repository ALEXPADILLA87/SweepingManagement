window.MaskedInput = React.createClass({
   getInitialState: function() {
        return {valor : ""};
   },
  handleChange:function(e){
    this.setState({valor : e.target.value});
  },
  componentDidMount: function () {
    var $elem = $(React.findDOMNode(this.refs.maskedInput));    
    var reverse = {reverse: false};
    
    if(this.props.isReverse){
      reverse = {reverse: true};
    }
    
    $elem.mask(this.props.mask, reverse);
  },
  render: function(){
    return (<input type='text' onChange={this.handleChange} ref='maskedInput'></input>);
  }
});