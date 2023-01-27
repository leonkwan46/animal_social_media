import {React, useState} from 'react';
import { Button, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { Box, Container } from '@mui/system';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { registerValidation } from '../validations/validation'
import axios from 'axios'
import { useNavigate } from 'react-router';
// import Top_nav from '../components/Top_nav';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const checkError = (touched, errors) => {
        return touched && errors;
    };

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }
    
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
                                        type={showPassword ? "text" : "password"}
                                        error={checkError(touched.password, errors.password)}
                                        helperText={
                                            checkError(touched.password, errors.password) ? errors.password
                                            :""
                                        }
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={handleShowPassword}
                                                        
                                                    >   
                                                        {showPassword ? <VisibilityOff fontSize = "small" /> : <Visibility fontSize = "small"/>}
                                                    </IconButton>
                                            </InputAdornment>
                                            )
                                        }}
                                        />
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