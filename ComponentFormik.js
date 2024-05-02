import { Formik, Field, Form, ErrorMessage } from 'formik';

const ComponentFormik = () => {

    const validationForm = (values) => {
        let errors = {};
        if (!values.login) {
            errors.login = "This field is required";
        }

        if (!/^[a-z]{3,}$/i.test(values.password)) {
            errors.password = "Must contain at least 3 chars";
        }

        return errors;
    };

    return (
        <>
            <Formik initialValues={{ login: '', password: '' }} onSubmit={values => { alert(`Values: ${JSON.stringify(values)}`) }} validate={validationForm}>
                <Form>
                    <div>
                        <label htmlFor='login'>Login</label>
                        <Field name="login" placeholder="login here..." />
                        <ErrorMessage name="login" />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <Field name="password" type="password" placeholder="Password" />
                        <ErrorMessage name="password" />
                    </div>
                    <div>
                        <button type='submit'>Sign In</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
};

export default ComponentFormik;
