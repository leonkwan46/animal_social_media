import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { Box, Container } from '@mui/system';
import { registerValidation } from '../validations/validation'
import FacebookLogin from 'react-facebook-login';
import { AccountCircle, Key } from '@mui/icons-material';

const Register = () => {

    // let [registered, setRegistered] = useState();

    // const responseFacebook = (response) => {
    //     // console.log(response);
    //     setRegistered(true);
    //   }

    // const componentClicked = (data) => {
    //     console.warn(data);
    // }

    const checkError = (touched, errors) => {
        if (touched && errors) {
          return true;
        }
        return false;
      };

    return (
        <Container>
            <Grid container justifyContent={"center"} textAlign={'center'}>
                <Grid padding={30}>
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
                           {/* <FacebookLogin
                            appId="682929963233249"
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={componentClicked}
                            callback={responseFacebook} 
                            />   */}
                                <Box padding={1}>
                                    <TextField
                                        required
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                        id='username'
                                        label='Username'
                                        prefix = "<AccountCircle />" 
                                        error={checkError(touched.username, errors.username)}
                                        helperText={
                                            checkError(touched.username, errors.username) ? errors.username
                                            :""
                                        }
                                        />
                                </Box>
                                <Box padding={1}>
                                    <TextField
                                        required
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
                                        required
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
                                    <Button fullWidth variant='contained' size='large' onClick={handleSubmit} >Register</Button>
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