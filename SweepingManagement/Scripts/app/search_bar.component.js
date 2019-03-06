// search in collections
window.SearchBar = React.createClass({
    getInitialState: function () {
        return {
            filterText: ''
        };
    },
    onSearchChange: function (e) {
        this.setState({ filterText: e.target.value });
        this.props.handlerInput(e.target.value);
    },

    render() {
        return (
            <div>
                <input type="text" className='search-right' maxLength={20} placeholder="Search..." value={this.state.filterText} onChange={this.onSearchChange} />
            </div>

        );
    }

});