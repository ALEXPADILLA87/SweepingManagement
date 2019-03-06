// component that contains the logic to update a user
window.UpsertComponent = React.createClass({
    getInitialState: function () {
        return {
            companies: [],
            selectedCompanyId: 0,
            id: 0,
            firstName: '',
            lastName: '',
            company_name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            active: true,
            success: null,
            createMode: true,
            formValid: true,
            // form validations objects, stores errors, function validations (required, data type, length ..) and display name for error message
            formValidations: {
                firstName: { error: '', validations: [validator.Required], displayName: 'First Name' },
                lastName: { error:'', validations: [validator.Required], displayName:'Last Name' },
                selectedCompanyId: { error: '', validations: [validator.GreaterThanZero], displayName:'Company' },
                email: { error: '', validations: [validator.Required, validator.Email], displayName:'Email' },
                password: { error: '', validations: [validator.Required, validator.Password], displayName: 'Password' },
                passwordConfirmation: { error: '', validations: [validator.Required, validator.Password, this.validatePasswordConfirmation], displayName: 'Password Confirmation' },
            }
        };
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
    validateForm: function() {
        const obj = this.state.formValidations;
        this.setState({ formValid: Object.keys(obj).every((k) => !obj[k].error) });
    },
    // on mount, fetch all categories and one user data to stored them as this component's state
    componentDidMount: function () {

        // read categories
        this.serverRequestCompany = $.get("http://localhost:49891/api/company",
            function (result) {
                this.setState({
                    companies: result
                });
            }.bind(this));
        var userId = this.props.sweepId;

        if (userId !== undefined) {
            // read one user data
            this.serverRequestUser = $.get("http://localhost:49891/api/user?id=" + userId,
                function (user) {
                    this.setState({ selectedCompanyId: user.company_id });
                    this.setState({ id: user.id });
                    this.setState({ firstName: user.firstName });
                    this.setState({ lastName: user.lastName });
                    this.setState({ email: user.email });
                    this.setState({ password: user.password });
                    this.setState({ passwordConfirmation: user.password });
                    this.setState({ active: user.active });
                    this.setState({ createMode: false });
                }.bind(this));
            $('.page-header h1').text('Update user');

        }
        else {
            $('.page-header h1').text('Create user');
        }
    },

    // on unmount, kill categories fetching in case the request is still pending
    componentWillUnmount: function () {
        this.serverRequestCompany.abort();
        if (!this.state.createMode)
            this.serverRequestUser.abort();
    },

    // handle save changes button clicked
    onSave: function (e) {

        // data in the form
        var form_data = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            active: this.state.active,
            company_id: this.state.selectedCompanyId
        };

        var type = this.state.createMode ? "POST" : "PUT";
        // submit form data to api
        this.props.ajax("http://localhost:49891/api/user", type, form_data);

        e.preventDefault();
    },

    render: function () {
        var companyOptions = this.state.companies.map(function (company) {
            return (
                <option key={company.id} value={company.id}>{company.name}</option>
            );
        });

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
                            <tr className={this.state.formValidations.firstName.error ? "form-group has-error" : ""}>
                                <td>First Name</td>
                                <td>
                                    <input
                                        type='text'
                                        name={'firstName'}
                                        className='form-control'
                                        value={this.state.firstName}
                                        required
                                        onChange={(event) => this.handleUserInput(event)} />
                                    <span className="help-block">{this.state.formValidations.firstName.error}</span>
                                </td>
                            </tr>

                            <tr className={this.state.formValidations.lastName.error ? "form-group has-error" : ""}>
                                <td>Last Name</td>
                                <td>
                                    <input
                                        type='text'
                                        name={'lastName'}
                                        value={this.state.lastName}
                                        className='form-control'
                                        required
                                        onChange={(event) => this.handleUserInput(event)} />
                                    <span className="help-block">{this.state.formValidations.lastName.error}</span>

                                </td>
                            </tr>
                            <tr className={this.state.formValidations.email.error ? "form-group has-error" : ""}>
                                <td>Email</td>
                                <td>
                                    <input
                                        type='text'
                                        name={'email'}
                                        value={this.state.email}
                                        className='form-control'
                                        required
                                        onChange={(event) => this.handleUserInput(event)} />
                                    <span className="help-block">{this.state.formValidations.email.error}</span>

                                </td>
                            </tr>

                            <tr className={this.state.formValidations.selectedCompanyId.error ? "form-group has-error" : ""}>
                                <td>Company</td>
                                <td>
                                    <select
                                        onChange={(event) => this.handleUserInput(event)}
                                        name={'selectedCompanyId'}
                                        required
                                        className='form-control'
                                        value={this.state.selectedCompanyId}>
                                        <option key="0" value="0">Select company...</option>
                                        {companyOptions}
                                    </select>
                                    <span className="help-block">{this.state.formValidations.selectedCompanyId.error}</span>
                                </td>
                            </tr>
                            <tr className={this.state.formValidations.password.error ? "form-group has-error" : ""}>
                                <td>Password</td>
                                <td>
                                    <input
                                        type='password'
                                        name={'password'}
                                        className='form-control'
                                        value={this.state.password}
                                        required
                                        onChange={(event) => this.handleUserInput(event)} />
                                    <span className="help-block">{this.state.formValidations.password.error}</span>
                                </td>
                            </tr>
                            <tr className={this.state.formValidations.passwordConfirmation.error ? "form-group has-error" : ""}> 
                                <td>Password Confirmation</td>
                                <td>
                                    <input
                                        type='password'
                                        name={'passwordConfirmation'}
                                        className='form-control'
                                        value={this.state.passwordConfirmation}
                                        required
                                        onChange={(event) => this.handleUserInput(event)} />
                                    <span className="help-block">{this.state.formValidations.passwordConfirmation.error}</span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    
                                    <input type="submit" disabled={!this.state.formValid} className='btn btn-primary m-r-1em' value="Save" />
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
    },

    validatePasswordConfirmation: function () {
        return this.state.password === this.state.passwordConfirmation ? "" : "Password confirmation does not match Password";
    }
});