// component that contains all the logic and other smaller components
// that form the Read Companies view
window.ReadComponent = React.createClass({
    getInitialState: function () {
        return {
            companies: [],
            filterText: ''
        };
    },

    // on mount, fetch all companies and stored them as this component's state
    componentDidMount: function () {
        this.serverRequest = $.get("http://localhost:49891/api/company", function (result) {
            if (result) {
                this.setState({
                    companies: result
                });
            }
        }.bind(this));
    },
    handlerInput: function (filterText) {
        this.setState({ filterText: filterText });
    },
    // on unmount, kill company fetching in case the request is still pending
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    render: function () {

        let filter = this.state.filterText.toLowerCase();
        var filteredCompanies = this.state.companies.filter(function (company) {
            return !filter || company.name.toLowerCase().indexOf(filter) !== -1;
        });


        $('.page-header h1').text('Read Companies');

        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode} handlerInput={this.handlerInput} />

                <CompaniesTable
                    companies={filteredCompanies}
                    changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
});