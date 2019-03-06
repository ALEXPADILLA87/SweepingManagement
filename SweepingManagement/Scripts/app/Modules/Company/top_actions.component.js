// component that contains the functionalities that appear on top of
// the users table: create user
window.TopActionsComponent = React.createClass({
    getInitialState: function () {
        return {
            filterText: ''
        };
    },

    render: function () {
        return (
            <div>
                <a href='#'
                    onClick={() => this.props.changeAppMode('create')}
                    className='btn btn-primary margin-bottom-1em'> Create company
                </a>

                <SearchBar handlerInput={this.props.handlerInput} />
            </div>
        );
    }
});