import React from 'react';
import {Button, TextField, Typography} from '@mui/material';
import { useFormik } from 'formik';
import { Box, Container } from '@mui/system';
import { loginValidation } from '../../src/validations/loginValidation'

const Login = () =>{
  const formik = useFormik({
    initialValues:{
      username: '',
      password: '',
    },
    validationSchema: loginValidation,
    onSubmit: values => {
    alert(console.log);
    },
  });
return (
  <Container maxWidth="sm">
    <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
      }}>
      <Typography component="h1" variant='h2'> Sign In </Typography>
      <Typography component="h2" variant='h4'> Please login before using!</Typography>  
    </Box>
    <Box sx={{
      marginTop: 4,
      alignItems: 'center',
    }}
    onSubmit={formik.handleSubmit}>
      <TextField required id = "username" 
        label="Username" 
        onChange={formik.handleChange} 
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}/>
      <br/>
      <TextField required id = "password" label="Password" type="password" onChange={formik.handleChange} 
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password} />
      <br/>
      <Button variant='contained' type='submit'> Submit </Button>
    </Box>

    </Container>
  );
}


export default Login;