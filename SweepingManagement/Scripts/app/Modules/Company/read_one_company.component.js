// component that contains the logic to read one user
window.ReadOneComponent = React.createClass({
    getInitialState: function () {
        return {
            id: 0,
            name: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            phone: '',
            active: true,
            success: null
        };
    },

    // on mount, fetch all categories and one company data to stored them as this component's state
    componentDidMount: function () {

        // read one company data
        var companyId = this.props.sweepId;
        this.serverRequestCompany = $.get("http://localhost:49891/api/company?id=" + companyId,
            function (company) {
                this.setState({ id: company.id });
                this.setState({ name: company.name });
                this.setState({ street: company.street });
                this.setState({ city: company.city });
                this.setState({ state: company.state });
                this.setState({ zipCode: company.zipCode });
                this.setState({ phone: company.phone });
                this.setState({ active: company.active });
            }.bind(this));

        $('.page-header h1').text('Read company');
    },

    // on unmount, kill categories fetching in case the request is still pending
    componentWillUnmount: function () {
        this.serverRequestCompany.abort();
    },

            render: function() {

                return (
                    <div>
                        <a href='#'
                            onClick={() => this.props.changeAppMode('read')}
                            className='btn btn-primary margin-bottom-1em'>
                            Read Companies
            </a>

                        <form onSubmit={this.onSave}>
                            <table className='table table-bordered table-hover'>
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{this.state.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Street</td>
                                        <td>{this.state.street}</td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>{this.state.city}</td>
                                    </tr>
                                    <tr>
                                        <td>State</td>
                                        <td>{this.state.state}</td>
                                    </tr>
                                    <tr>
                                        <td>Zip Code</td>
                                        <td>{this.state.zipCode}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>{this.state.phone}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                );
            }
});