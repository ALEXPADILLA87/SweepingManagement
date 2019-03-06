// component that contains the logic to read one user
window.ReadOneComponent = React.createClass({
    getInitialState: function () {
        return {
            companies: [],
            selectedCompanyId: -1,
            id: 0,
            firstName: '',
            lastName: '',
            company_name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            active: true
        };
    },

    // on mount, read user data and them as this component's state
    componentDidMount: function () {

        var userId = this.props.sweepId;

        this.serverRequestProd = $.get("http://localhost:49891/api/user?id=" + userId,
            function (user) {
                this.setState({ company_name: user.company_name });
                this.setState({ id: user.id });
                this.setState({ firstName: user.firstName });
                this.setState({ lastName: user.lastName });
                this.setState({ email: user.email });
                this.setState({ password: user.password });
                this.setState({ passwordConfirmation: user.password });
                this.setState({ active: user.active });
            }.bind(this));

        $('.page-header h1').text('Read User');
    },

    // on unmount, kill categories fetching in case the request is still pending
    componentWillUnmount: function () {
        this.serverRequestProd.abort();
    },

            render: function() {

                return (
                    <div>
                        <a href='#'
                            onClick={() => this.props.changeAppMode('read')}
                            className='btn btn-primary margin-bottom-1em'>
                            Read Users
            </a>

                        <form onSubmit={this.onSave}>
                            <table className='table table-bordered table-hover'>
                                <tbody>
                                    <tr>
                                        <td>First Name</td>
                                        <td>{this.state.firstName}</td>
                                    </tr>

                                    <tr>
                                        <td>Last Name</td>
                                        <td>{this.state.lastName}</td>
                                    </tr>

                                    <tr>
                                        <td>Email</td>
                                        <td>{this.state.email}</td>
                                    </tr>

                                    <tr>
                                        <td>Company</td>
                                        <td>{this.state.company_name}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </form>
                    </div>
                );
            }
});