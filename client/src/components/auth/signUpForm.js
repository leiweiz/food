import React, { Component } from 'react';
import { Button, Checkbox, Form, Message, Segment } from 'semantic-ui-react'
import * as actions from '../../actions/auth_actions';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class SignUpForm extends Component {
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
        this.props.signupUser(values, () => {
            this.props.history.push('/home');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <Segment padded>
                <Form error onSubmit={handleSubmit(this.handleForSubmit.bind(this))}>
                    <Field
                        label="Email"
                        name="email"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="Username"
                        name="username"
                        type="text"
                        component={this.renderField}
                    />
                    <Field
                        label="Password"
                        name="password"
                        type="password"
                        component={this.renderField}
                    />
                    <Field
                        label="Confirm Password"
                        name="passwordConfirm"
                        type="password"
                        component={this.renderField}
                    />
                    {this.renderAlert()}
                    <Button primary fluid type='submit'>Sign Up</Button>
                </Form>
            </Segment>
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

    if (!values.username) {
        errors.username = "Username can not be empty";
    }

    if (!values.password) {
        errors.password = "Password can not be empty";
    }

    if (values.passwordConfirm !== values.password) {
        errors.passwordConfirm = "Two password is different";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'signup'
})(connect(mapStateToProps, actions)(SignUpForm));
