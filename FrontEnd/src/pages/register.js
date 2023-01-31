/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { Box, Container } from "@mui/system";
import { registerValidation } from "../validations/validation";
import axios from "axios";
import { useNavigate } from "react-router";
import Top_nav from "../components/Top_nav";

const Register = () => {
  const navigate = useNavigate();

  const checkError = (touched, errors) => {
    if (touched && errors) {
      return true;
    }
    return false;
  };

  const onSubmit = async (values) => {
    await axios
      .post("http://localhost:5000/register", values)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        // navigate("/test");
      })
      .catch((err) => {
        alert(err);
        console.log(`Register Failed: ${err.status} : ${err.message}`);
      });
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Top_nav />

      <Grid container justifyContent={"center"} textAlign={"center"}>
        <Grid padding={30}>
          <Formik
            initialValues={{ username: "", password: "", confirm_password: "" }}
            onSubmit={onSubmit}
            validationSchema={registerValidation}
          >
            {({
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              handleSubmit,
            }) => (
              <Form>
                <Box padding={1}>
                  <TextField
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    id="username"
                    label="Username"
                    prefix="<AccountCircle />"
                    error={checkError(touched.username, errors.username)}
                    helperText={
                      checkError(touched.username, errors.username)
                        ? errors.username
                        : ""
                    }
                  />
                </Box>
                <Box padding={1}>
                  <TextField
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    id="password"
                    label="Password"
                    type="password"
                    error={checkError(touched.password, errors.password)}
                    helperText={
                      checkError(touched.password, errors.password)
                        ? errors.password
                        : ""
                    }
                  />
                </Box>
                <Box padding={1}>
                  <TextField
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirm_password}
                    id="confirm_password"
                    label="Confirm Password"
                    type="password"
                    error={checkError(
                      touched.confirm_password,
                      errors.confirm_password
                    )}
                    helperText={
                      checkError(
                        touched.confirm_password,
                        errors.confirm_password
                      )
                        ? errors.confirm_password
                        : ""
                    }
                  />
                </Box>
                <Box padding={1}>
                  <Button
                    id="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                  >
                    Register
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
