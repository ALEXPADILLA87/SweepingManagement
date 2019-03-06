// component that renders a single user
window.UserRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.user.firstName}</td>
                <td>{this.props.user.lastName}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.company_name}</td>
                <td>
                    <a href='#'
                        onClick={() => this.props.changeAppMode('readOne', this.props.user.id)}
                        className='btn btn-info m-r-1em'> Read One
                </a>
                    <a href='#'
                        onClick={() => this.props.changeAppMode('update',this.props.user.id)}
                        className='btn btn-primary m-r-1em'> Edit
                </a>
                    <a
                        onClick={() => this.props.changeAppMode('delete', this.props.user.id)}
                        className='btn btn-danger'> Delete
                </a>
                </td>
            </tr>
        );
    }
});