import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField
} from "@mui/material";
import { Form, Formik } from "formik";
import { registerValidation } from "../../shared/util/validation";
import axios from "axios";
import { useNavigate } from "react-router";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const RegisterButton = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // RegisterButton Open/Close methods
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
        handleClose();
        navigate("/test");
      })
      .catch((err) => {
        alert(err.response.data);
        console.log(`Register Failed: ${err.response.status} : ${err.response.data}`);
      });
  };

  return (
    <Box>
      <Box textAlign="center" justifyContent="center">
        <Button variant="contained" onClick={handleClickOpen}>
          Register
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <Box justifyContent={"center"} textAlign={"center"}>
          <DialogTitle textAlign={"center"}>Create new account</DialogTitle>
          <DialogContent>
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
                confirm_password: "",
                name: "",
                date: ""
              }}
              onSubmit={onSubmit}
              validationSchema={registerValidation}
            >
              {({ values, handleChange, handleBlur, touched, errors, handleSubmit, setFieldValue }) => (
                <Form>
                  <Stack spacing={2.5}>
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
                      value={values.email}
                      id="email"
                      label="Email"
                      error={checkError(touched.email, errors.email)}
                      helperText={checkError(touched.email, errors.email) ? errors.email : ""}
                    />

                    <TextField
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      id="password"
                      label="Password"
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
                      label="Confirm Password"
                      type="password"
                      error={checkError(touched.confirm_password, errors.confirm_password)}
                      helperText={
                        checkError(touched.confirm_password, errors.confirm_password) ? errors.confirm_password : ""
                      }
                    />

                    <Divider />

                    <TextField
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      id="name"
                      label="Name"
                      error={checkError(touched.name, errors.name)}
                      helperText={checkError(touched.name, errors.name) ? errors.name : ""}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        renderInput={(date) => (
                          <TextField
                            {...date}
                            inputProps={{ ...date.inputProps, readOnly: true }}
                            error={checkError(touched.date, errors.date)}
                            onBlur={handleBlur}
                          />
                        )}
                        value={values.date}
                        inputFormat="DD/MM/YYYY"
                        onChange={(value) => setFieldValue("date", value, true)}
                        label="Date of Birth"
                      />
                    </LocalizationProvider>

                    <Button id="submit" fullWidth variant="contained" size="large" onClick={handleSubmit}>
                      Register
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
};

export default RegisterButton;
