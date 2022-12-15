import React from 'react';
import { Button, TextField } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { Box } from '@mui/system';

const Register = () => {

    return (
        <Formik
            initialValues={{username: "", password: "", confirm_password: ""}}
            onSubmit = { async (values) => {
                alert(JSON.stringify(values))
            }}
        >
            {({values, handleChange}) => (
            <Form>
                <Box>
                    <Field 
                    onChange={handleChange} 
                    value={values.username}
                    id = 'username'
                    label = 'Username'
                    />
                </Box>
                <Box>
                    <Field 
                    onChange={handleChange} 
                    value={values.password}
                    id = 'password'
                    label = 'Password'
                    />
                </Box>

                <Button>Submit</Button>
            </Form>
            )}
        </Formik>
    )
};

export default Register;