import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Card, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import TopNav from "../../shared/components/TopNav/TopNav";
import { resetPasswordValidation } from "../../shared/util/validation";
import "./ResetPassword.css";

const ResetPassword = () => {
  const nav = useNavigate();

  const checkError = (touched, errors) => {
    if (touched && errors) {
      return true;
    } else {
      return false;
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values) => {
    axios
      .post("http://localhost:5000/login/reset-password", values)
      .then((res) => {
        alert(res.data);
        nav("/login");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  return (
    <Container maxWidth={false} disableGutters>
      <TopNav />

      <Box className="ResetPassword-outer-box-wrap">
        <Card className="ResetPassword-card-wrap">
          <Formik
            initialValues={{ username: "", password: "", confirm_password: "" }}
            onSubmit={onSubmit}
            validationSchema={resetPasswordValidation}
          >
            {({ values, handleChange, handleSubmit, handleBlur, touched, errors }) => (
              <Form>
                <Stack spacing={2.5}>
                  <Typography className="ResetPassword-card-title">Reset Password</Typography>
                  <TextField
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    id="username"
                    label="Username"
                    error={checkError(touched.username, errors.username)}
                    helperText={checkError(touched.username, errors.username) ? errors.username : ""}
                  />

                  <TextField
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    id="password"
                    label="New Password"
                    type={showPassword ? "text" : "password"}
                    error={checkError(touched.password, errors.password)}
                    helperText={checkError(touched.password, errors.password) ? errors.password : ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword} size="small">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                  <TextField
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirm_password}
                    id="confirm_password"
                    label="Confirm New Password"
                    type={showPassword ? "text" : "password"}
                    error={checkError(touched.confirm_password, errors.confirm_password)}
                    helperText={
                      checkError(touched.confirm_password, errors.confirm_password) ? errors.confirm_password : ""
                    }
                  />
                  <Button size="large" variant="contained" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Box>
    </Container>
  );
};

export default ResetPassword;
