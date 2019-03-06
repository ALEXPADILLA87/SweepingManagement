// component for the whole users table
window.CompaniesTable = React.createClass({
    render: function () {
        var rows = this.props.companies
            .map(function (company, i) {
                return (
                    <CompanyRow
                        key={i}
                        company={company}
                        changeAppMode={this.props.changeAppMode} />
                );
            }.bind(this));

        return (
            !rows.length
                ? <div className='alert alert-danger mt-50'>No company found.</div>
                :
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        );
    }
});