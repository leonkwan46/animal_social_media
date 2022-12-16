import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { Box, Container } from '@mui/system';
import { registerValidation } from '../../src/validations/registerValidation'

const Register = () => {

    const checkError = (touched, errors) => {
        if (touched && errors) {
          return true;
        }
        return false;
      };

    return (
        <Container>
            <Grid container justifyContent={"center"} textAlign={'center'}>
                <Grid paddingTop={30}>
                    <Formik
                        initialValues={{ username: "", password: "", confirm_password: "" }}
                        onSubmit={async (values) => {
                            //TODO: Build API to BackEnd
                            alert(JSON.stringify(values))
                        }}
                        validationSchema={registerValidation}
                    >
                        {({ values, handleChange, handleBlur, touched, errors, handleSubmit }) => (
                            <Form>
                                    <Box padding={1}>
                                        <TextField
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.username}
                                            id='username'
                                            label='Username' 
                                            error={checkError(touched.username, errors.username)}
                                            helperText={
                                                checkError(touched.username, errors.username) ? errors.username
                                                :""
                                            }
                                            />
                                    </Box>
                                    <Box padding={1}>
                                        <TextField
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            id='password'
                                            label='Password'
                                            type='password'
                                            error={checkError(touched.password, errors.password)}
                                            helperText={
                                                checkError(touched.password, errors.password) ? errors.password
                                                :""
                                            }                                    />
                                    </Box>
                                    <Box padding={1}>
                                        <TextField
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirm_password}
                                            id='confirm_password'
                                            label='Confirm Password'
                                            type='password'
                                            error={checkError(touched.confirm_password, errors.confirm_password)}
                                            helperText={
                                                checkError(touched.confirm_password, errors.confirm_password) ? errors.confirm_password
                                                :""
                                            }                                    />
                                    </Box>
                                    <Box padding={1}>
                                        <Button variant='contained' size='large' onClick={handleSubmit} >Register</Button>
                                    </Box>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Register;