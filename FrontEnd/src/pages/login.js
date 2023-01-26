import React, {useState} from 'react';
import { Formik } from 'formik';
import {Button, TextField, IconButton, Typography,InputAdornment} from '@mui/material';
import { Box, Container } from '@mui/system';
import { AccountCircle, Key, VisibilityOff, Visibility } from '@mui/icons-material';
import { loginValidation } from '../../src/validations/validation'
import Top_nav from '../components/Top_nav';
import axios from 'axios';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  }

  const onSubmit = async (values) => {
    await axios.post("http://localhost:5000/login", values).then(
      res => {
        
      }
    )
  }


  return (
    <Container maxWidth={false} disableGutters>
      <Top_nav />

      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={loginValidation}
        onSubmit={values => {
          alert(JSON.stringify(values));
        }}
      >
        {({ errors, touched, handleSubmit, handleChange, handleBlur }) => (
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
                id="username"
                label="Username"
                InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>, }}
                error={touched.username && errors.username}
                helperText={(touched.username && errors.username) ? errors.username : ""} />
              <br />
      
              <TextField required fullWidth onChange={handleChange} onBlur={handleBlur} id="password" label="Password" type={showPassword ? "text" : "password"}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Key /></InputAdornment>,
                  endAdornment: (<InputAdornment position="end">
                                      <IconButton
                                          onClick={handleShowPassword}
                                      >   
                                          {showPassword ? <VisibilityOff fontSize = "small" /> : <Visibility fontSize = "small"/>}
                                      </IconButton>
                                  </InputAdornment>
                  )
                }}
                error={touched.password && errors.password}
                helperText={(touched.password && errors.password) ? errors.password : ""} />
              <br />
              <Button variant='contained' type='submit' onClick={handleSubmit}> Submit </Button>
            </Box>
    
          </Container>
        )}
      </Formik>
    </Container>

  )
}; 

export default Login

