// component for the whole users table
window.UsersTable = React.createClass({
    render: function () {
        var rows = this.props.users
            .map(function (user, i) {
                return (
                    <UserRow
                        key={i}
                        user={user}
                        changeAppMode={this.props.changeAppMode} />
                );
            }.bind(this));

        return (
            !rows.length
                ? <div className='alert alert-danger mt-50'>No users found.</div>
                :
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Company</th>
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