import React from 'react';
import {Button, TextField, Typography,InputAdornment} from '@mui/material';
import { Formik } from 'formik';
import { Box, Container } from '@mui/system';
import { loginValidation } from '../../src/validations/validation'
import { AccountCircle, Key } from '@mui/icons-material';
import axios from 'axios';


const backURL = "http://localhost:5000/login"


const onSubmit = async (values) =>{
  
  await axios.post(backURL,values)
  .then(res =>{
    // if(res.data.redirect === '/'){
      // window.location = "/";
      localStorage.setItem('token',res.data.token);
      alert(JSON.stringify(res));
      // alert(JSON.stringify(res));
      // }

  })
  .catch((err) => { 
    // console.log("Error: " + err.message);
    alert(JSON.stringify("Error: " + err));
  })
  
  
};
const Login = () => (
  <Formik
    initialValues={{
      username: '',
      password: '',
    }}
    validationSchema= {loginValidation}
    onSubmit={onSubmit}
    // onSubmit= {values => {
    //   // alert(JSON.stringify(values))
    //   axios.post(backURL, values)  
    // }}
  >
  {({values,errors, touched, handleSubmit,handleChange,handleBlur}) => (
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
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      
      <TextField required fullWidth onChange={handleChange} onBlur={handleBlur}
        id = "username" 
        label="Username"
        value = {values.username}
        InputProps={{startAdornment:<InputAdornment position="start"><AccountCircle /></InputAdornment>,}} 
        error={touched.username && errors.username}
        helperText={(touched.username && errors.username) ? errors.username : ""}/>
      <br/>
      
      <TextField required fullWidth onChange={handleChange} onBlur={handleBlur} id = "password" label="Password" type="password"
        value = {values.password}
        InputProps={{startAdornment:<InputAdornment position="start"><Key /></InputAdornment>,}} 
        error={touched.password && errors.password}
        helperText={(touched.password && errors.password) ? errors.password : ""} />
      <br/>
      <Button variant='contained' type='submit' onClick={handleSubmit}> Submit </Button>
    </Box>
    
    </Container>
)}
    </Formik>
); 

export default Login

