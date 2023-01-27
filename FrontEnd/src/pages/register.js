import React, {useState} from 'react';
import { Button, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { Box, Container } from '@mui/system';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { registerValidation } from '../validations/validation'
import axios from 'axios'
import { useNavigate } from 'react-router';

import "./register-login.css";
// import Top_nav from '../components/Top_nav';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const navigate = useNavigate();

    const checkError = (touched, errors) => {
        return touched && errors;
    };
    
    const onSubmit = async(values) => {
        await axios.post('http://localhost:5000/register', 
        values)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            navigate("/test")
        }).catch((err) => {
            alert(err.response.data)
            console.log(`Register Failed: ${err.response.status} : ${err.response.data}`);
        })
    }
    return (
        <Container maxWidth={false} disableGutters >
      
            <Grid container justifyContent={"center"} textAlign={'center'}>
                <Grid padding={30}>
                    <Formik
                        initialValues={{ username: "", password: "", confirm_password: ""}}
                        onSubmit={onSubmit}
                        validationSchema={registerValidation}
                    >
                        {({ values, handleChange, handleBlur, touched, errors, handleSubmit }) => (
                            <Form>
                                <Box padding={1} className = "register-login-wrapper">
                                    <TextField
                                        required
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                        id='username'
                                        className = "register-login-field"
                                        label='Username'
                                        prefix = "<AccountCircle />" 
                                        error={checkError(touched.username, errors.username)}
                                        helperText={
                                            checkError(touched.username, errors.username) ? errors.username
                                            :""
                                        }
                                        />
                                </Box>
                                <Box padding={1} className = "register-login-wrapper">
                                    <TextField
                                        required
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        id='password'
                                        className = "register-login-field"

                                        label='Password'
                                        type= {showPassword ? "text": "password"}
                                        error={checkError(touched.password, errors.password)}
                                        helperText={
                                            checkError(touched.password, errors.password) ? errors.password
                                            :""
                                        }
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment positoin="end">
                                                    <IconButton
                                                        onClick={handleShowPassword}
                                                        size = "small"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        />
                                </Box>
                                <Box padding={1} className = "register-login-wrapper">
                                    <TextField
                                        required
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirm_password}
                                        id='confirm_password'
                                        className = "register-login-field"
                                        label='Confirm Password'
                                        type='password'
                                        error={checkError(touched.confirm_password, errors.confirm_password)}
                                        helperText={
                                            checkError(touched.confirm_password, errors.confirm_password) ? errors.confirm_password
                                            :""
                                        }                                    
                                        />
                                </Box>
                                <Box padding={1}>
                                    <Button id='submit' fullWidth variant='contained' size='large' onClick={handleSubmit} >Register</Button>
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