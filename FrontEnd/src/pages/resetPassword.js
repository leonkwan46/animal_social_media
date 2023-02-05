import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { resetPasswordValidation } from "../validations/validation";



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
    console.log("====================================");
    console.log("HI");
    console.log("====================================");
    axios
      .post("http://localhost:5000/login/reset-password", values)
      .then((res) => {
        alert(res.data)
        nav("/login")
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err);
        console.log("====================================");
      });
  };

  return (
    <Formik
      initialValues={{username: "", password: "", confirm_password: "" }}
      onSubmit={onSubmit}
      validationSchema={resetPasswordValidation}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        touched,
        errors,
      }) => (
        <Form>
          <TextField
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            id="username"
            label="Username"
            error={checkError(touched.username, errors.username)}
            helperText={
              checkError(touched.username, errors.username)
                ? errors.username
                : ""
            }
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
            helperText={
              checkError(touched.password, errors.password)
                ? errors.password
                : ""
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} size="small">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirm_password}
            id="confirm_password"
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            error={checkError(
              touched.confirm_password,
              errors.confirm_password
            )}
            helperText={
              checkError(touched.confirm_password, errors.confirm_password)
                ? errors.confirm_password
                : ""
            }
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ResetPassword;
