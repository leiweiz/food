import React, { Component } from 'react';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions/auth_actions';
import { connect } from 'react-redux';

class SignInForm extends Component {

    renderField(field) {
        const label = field.label;
        return (
            <Form.Field>
                <label>{label}</label>
                <input
                    placeholder={label}
                    type={field.type}
                    {...field.input}
                />
                {field.meta.touched && field.meta.error &&
                <div>{field.meta.error}</div>}
            </Form.Field>
        );
    }

    renderAlert() {
        let alert = <div></div>;
        if (this.props.errorMessage) {
            alert = (
                <Message
                    error
                    content={this.props.errorMessage}
                />
            );
        }
        return alert;
    }

    handleForSubmit(values) {
        this.props.signinUser(values, () => {
            this.props.history.push('/account');
        })
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <Form error onSubmit={handleSubmit(this.handleForSubmit.bind(this))}>
                <Field
                    label="Email"
                    name="email"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Password"
                    name="password"
                    type="password"
                    component={this.renderField}
                />
                {this.renderAlert()}
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = "Email can not be empty";
    }

    if (!values.password) {
        errors.password = "Password can not be empty";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'signin'
})(connect(mapStateToProps, actions)(SignInForm));
