// component that contains all the logic and other smaller components
// that form the Read Users view
window.ReadComponent = React.createClass({
    getInitialState: function () {
        return {
            users: [],
            filterText: ''
        };
    },

    // on mount, fetch all users and stored them as this component's state
    componentDidMount: function () {

        this.serverRequest = $.get("http://localhost:49891/api/user", function (result) {
            if (result) {
                this.setState({
                    users: result
                });
            }
        }.bind(this));
    },
    handlerInput: function (filterText) {
        this.setState({ filterText: filterText });
    },
    // on unmount, kill user fetching in case the request is still pending
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    render: function () {

        let filter = this.state.filterText.toLowerCase();
        var filteredUsers = this.state.users.filter(function (user) {
            return !filter || (user.firstName.toLowerCase().indexOf(filter) !== -1
                || user.lastName.toLowerCase().indexOf(filter) !== -1);
        });


        $('.page-header h1').text('Read Users');

        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode} handlerInput={this.handlerInput} />

                <UsersTable
                    users={filteredUsers}
                    changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
});