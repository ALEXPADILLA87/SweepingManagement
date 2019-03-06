// component that contains the logic to update a user
window.UpsertComponent = React.createClass({
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
            success: null,
            createMode: true,
            formValid: true,
            // form validations objects, stores errors, function validations (required, data type, length ..) and display name for error message
            formValidations: {
                name: { error: '', validations: [validator.Required], displayName: 'Name' },
                street: { error: '', validations: [validator.Required], displayName: 'Street' },
                city: { error: '', validations: [validator.Required], displayName: 'City' },
                state: { error: '', validations: [validator.Required], displayName: 'State' },
                phone: { error: '', validations: [validator.Required, validator.Phone], displayName: 'Phone' },
                zipCode: { error: '', validations: [validator.Required, validator.ZipCode], displayName: 'Zip Code' },
            }
        };
    },

    // on mount, fetch all categories and one company data to stored them as this component's state
    componentDidMount: function () {
        
        // read one company data
        var companyId = this.props.sweepId;
        if (companyId !== undefined) {
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
                    this.setState({ createMode: false });
                }.bind(this));
            $('.page-header h1').text('Update company');
        } else {
            $('.page-header h1').text('Create company');
        }
    },
    onNameChange: function (e) {
        this.setState({ name: e.target.value });
    },

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    },
    validateField: function (name, value) {

        let formValidations = this.state.formValidations;
        let field = formValidations[name];
        for (var index = 0; index < field.validations.length; ++index) {
            field.error = '';
            let errorMessage = field.validations[index](field.displayName, value);
            if (errorMessage && errorMessage.length > 0) {
                field.error = errorMessage;
                break;
            }
        }

        this.setState({
            formValidations: formValidations,
        }, this.validateForm());
    },
    // verify if there is no errors
    validateForm: function () {
        const obj = this.state.formValidations;
        this.setState({ formValid: Object.keys(obj).every((k) => !obj[k].error) });
    },
    // on mount, fetch all categories and one user data to stored them as this component's state
    
    onSave: function (e) {

        // data in the form
        var form_data = {
            id: this.state.id,
            name: this.state.name,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            phone: this.state.phone,
            active: true
        };
        var type = this.state.createMode ? "POST" : "PUT";
        // submit form data to api
        this.props.ajax("http://localhost:49891/api/company", type, form_data);
        e.preventDefault();
    },
    alertMessage: function (response) {
        this.props.showAlert(response);
    },
    render: function () {

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
                            <tr className={this.state.formValidations.name.error ? "form-group has-error" : ""}>
                                <td>Name</td>
                                <td>
                                    <input
                                        type='text'
                                        name={'name'}
                                        className='form-control'
                                        value={this.state.name}
                                        required
                                        onChange={(event) => this.handleUserInput(event)} />
                                    <span className="help-block">{this.state.formValidations.name.error}</span>
                                </td>
                            </tr>
                            <tr className={this.state.formValidations.street.error ? "form-group has-error" : ""}>
                                <td>Street</td>
                                <td>
                                    <input
                                        type='text'
                                        name={'street'}
                                        className='form-control'
                                        value={this.state.street}
                                        required
                                        onChange={(event) => this.handleUserInput(event)} />
                                    <span className="help-block">{this.state.formValidations.street.error}</span>

                                </td>
                            </tr>

                            <tr className={this.state.formValidations.city.error ? "form-group has-error" : ""}>
                                <td>City</td>
                                <td>
                                    <input
                                        type='text'
                                        name={'city'}
                                        className='form-control'
                                        value={this.state.city}
                                        required
                                        onChange={(event) => this.handleUserInput(event)} />
                                    <span className="help-block">{this.state.formValidations.city.error}</span>

                                </td>
                            </tr>

                            <tr className={this.state.formValidations.state.error ? "form-group has-error" : ""}>
                                <td>State</td>
                                <td>
                                    <input
                                        type='text'
                                        name={'state'}
                                        className='form-control'
                                        value={this.state.state}
                                        required
                                        onChange={(event) => this.handleUserInput(event)} />
                                    <span className="help-block">{this.state.formValidations.state.error}</span>
                                </td>
                            </tr>
                            <tr className={this.state.formValidations.zipCode.error ? "form-group has-error" : ""}>

                                <td>Zip Code</td>
                                <td>
                                    <input
                                        type='text'
                                        name={'zipCode'}
                                        className='form-control'
                                        value={this.state.zipCode}
                                        required
                                        onChange={(event) => this.handleUserInput(event)} />
                                    <span className="help-block">{this.state.formValidations.zipCode.error}</span>
                                </td>
                            </tr>
                            <tr className={this.state.formValidations.phone.error ? "form-group has-error" : ""}>
                                <td>Phone</td>
                                <td>
                                    <input
                                        type='text'
                                        className='form-control'
                                        value={this.state.phone}
                                        name={'phone'}
                                        required
                                        onChange={(event) => this.handleUserInput(event)} />
                                    <span className="help-block">{this.state.formValidations.phone.error}</span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button
                                        className='btn btn-primary m-r-1em'
                                        onClick={this.onSave}>Save</button>

                                    <button
                                        className='btn btn-danger padding-left-10'
                                        onClick={() => this.props.changeAppMode('read')}>Cancel</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>

            </div>
        );
    }


});