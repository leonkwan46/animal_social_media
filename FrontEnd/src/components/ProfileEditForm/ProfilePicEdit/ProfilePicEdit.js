import { Box, Button, Dialog } from "@mui/material";
import axios from "axios";
import { Formik, Form } from "formik";
import React from "react";
import { useState } from "react";
import "./ProfilePicEdit.css"

const ProfilePicEdit = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (values) => {
    console.log({
      fileName: values.file.name,
      type: values.file.type,
      size: `${values.file.size} bytes`,
    });
    axios.post("http://localhost:5000/profile/profile_pic_edit", {values})
    .then((res) => {

    })
  }



  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>Edit</Button>
        <Dialog open={open} onClose={handleClose}>
          <Box sx={{ padding: "10px" }}>
            <Formik
              initialValues={{ file: null }}
              onSubmit={onSubmit}
            >
              {({ handleSubmit, setFieldValue }) => (
                <Form>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={(event) => {
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                  />

                  <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Dialog>
      </>
  );
};

export default ProfilePicEdit;