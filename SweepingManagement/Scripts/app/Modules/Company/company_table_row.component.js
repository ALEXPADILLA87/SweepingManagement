// component that renders a single user
window.CompanyRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.company.name}</td>
                <td>{this.props.company.city}</td>
                <td>{this.props.company.state}</td>
                <td>
                    <a href='#'
                        onClick={() => this.props.changeAppMode('readOne', this.props.company.id)}
                        className='btn btn-info m-r-1em'> Read One
                </a>
                    <a href='#'
                        onClick={() => this.props.changeAppMode('update', this.props.company.id)}
                        className='btn btn-primary m-r-1em'> Edit
                </a>
                    <a
                        onClick={() => this.props.changeAppMode('delete', this.props.company.id)}
                        className='btn btn-danger'> Delete
                </a>
                </td>
            </tr>
        );
    }
});