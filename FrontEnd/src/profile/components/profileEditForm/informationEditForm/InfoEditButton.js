import { Box, Button, Dialog, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { updateValidation } from "../../../../shared/util/validation";
import useFetch from "../../../../shared/hooks/usefetch";

const InfoEditButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const checkError = (touched, errors) => {
    if (touched && errors) {
      return true;
    }
    return false;
  };

  const { data } = useFetch("http://localhost:5000/profile", {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token")
    }
  });

  const onSubmit = async (values) => {
    await axios
      .post("http://localhost:5000/profile/info_edit", values, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then((res) => {
        alert(res.data);
        handleClose();
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.response.data);
        console.log(`Upload Failed: ${err.response.status} : ${err.response.data}`);
      });
  };

  return (
    <>
      <Button onClick={handleOpen} variant="outlined">
        Edit
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <Box justifyContent={"center"} textAlign={"center"}>
          <DialogTitle textAlign={"center"}>Edit Profile Info</DialogTitle>
          <Box sx={{ padding: "10px" }}>
            <DialogContent>
              <Formik
                initialValues={{
                  name: data?.data.name,
                  date: data?.data.date,
                  bio: data?.data.bio
                }}
                onSubmit={onSubmit}
                validationSchema={updateValidation}
              >
                {({ values, handleChange, handleBlur, touched, errors, handleSubmit, setFieldValue }) => (
                  <Form>
                    <Stack spacing={2.5}>
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
                          InputProps={{ sx: { width: "225px" } }}
                          renderInput={(date) => (
                            <TextField
                              {...date}
                              inputProps={{ ...date.inputProps, readOnly: true }}
                              error={checkError(touched.confirm_password, errors.confirm_password)}
                              onBlur={handleBlur}
                            />
                          )}
                          value={values.date}
                          inputFormat="DD/MM/YYYY"
                          onChange={(value) => setFieldValue("date", value, true)}
                          label="Date of Birth"
                        />
                      </LocalizationProvider>

                      <TextField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.bio}
                        id="bio"
                        label="Bio"
                        error={checkError(touched.confirm_password, errors.confirm_password)}
                      />

                      <Button id="submit" fullWidth variant="contained" size="large" onClick={handleSubmit}>
                        Update
                      </Button>
                    </Stack>
                  </Form>
                )}
              </Formik>
            </DialogContent>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default InfoEditButton;
