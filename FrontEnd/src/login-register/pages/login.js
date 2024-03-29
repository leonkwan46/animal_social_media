import React, { useState } from "react";
import { Button, TextField, Typography, InputAdornment, IconButton } from "@mui/material";
import { Formik } from "formik";
import { Box, Container } from "@mui/system";
import { loginValidation } from "../../shared/util/validation";
import { AccountCircle, Key } from "@mui/icons-material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import axios from "axios";
// import Top_nav from '../components/Top_nav';
import { useNavigate } from "react-router";
import RegisterButton from "../components/RegisterButton";
import { Link } from "react-router-dom";

const Login = (socket) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const backURL = "http://localhost:5000/login";
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    await axios
      .post(backURL, values)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.name);
        // alert(JSON.stringify(res));

        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data);
        console.log("Error", err.response);
      });
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      validationSchema={loginValidation}
      onSubmit={onSubmit}
      // onSubmit= {values => {
      //   // alert(JSON.stringify(values))
      //   axios.post(backURL, values)
      // }}
    >
      {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
        <Container maxWidth="sm">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Typography component="h1" variant="h2">
              {" "}
              Sign In{" "}
            </Typography>
            <Typography component="h2" variant="h4">
              {" "}
              Please login before using!
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <TextField
              required
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              id="username"
              label="Username"
              value={values.username}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
              error={touched.username && errors.username}
              helperText={touched.username && errors.username ? errors.username : ""}
            />
            <br />

            <TextField
              required
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              label="Password"
              value={values.password}
              type={showPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Key />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} size="small">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              error={touched.password && errors.password}
              helperText={touched.password && errors.password ? errors.password : ""}
            />
            <br />
            <Box>
              <Link to="../reset-password">Forgotten Password?</Link>
            </Box>
            <br />
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              {" "}
              Submit{" "}
            </Button>
          </Box>
        </Container>
      )}
    </Formik>
  );
};

export default Login;
