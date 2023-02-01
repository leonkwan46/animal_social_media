import { Avatar, Box, Button, Dialog, Typography } from "@mui/material";
import axios from "axios";
import { Formik, Form } from "formik";
import React from "react";
import { useState } from "react";
import "./ProfilePicEdit.css";

const ProfilePicEdit = () => {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  axios.get("http://localhost:5000/profile/profile_pic_edit", {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((res) => {
    setImg(res.data)
  })

  const onSubmit = async (values) => {
    // This fking took me 6 hours of endless researching
    // PLEASE DON'T DO THE SAME SHIT AGAIN
    const imageData = new FormData();
    imageData.append("image", values.photo);

    await axios
      .post("http://localhost:5000/profile/profile_pic_edit", imageData, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert(res.data)
        setOpen(false);
        window.location.reload(false);
      });
  };

  return (
    <Box className="card-wrap">
      <Box className="card-header">
        <Typography className="card-header-text">Profile Picture</Typography>
        <Button variant="outlined" onClick={handleOpen}>
          Edit
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <Box sx={{ padding: "10px" }}>
            <Formik initialValues={{ photo: null }} onSubmit={onSubmit}>
              {({ handleSubmit, setFieldValue }) => (
                <Form>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("photo", event.currentTarget.files[0]);
                    }}
                  />

                  <Button variant="outlined" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Dialog>
      </Box>
      <Box className="card-item-pic">
        <Avatar src={img} className="avatar" />
      </Box>
    </Box>
  );
};

export default ProfilePicEdit;
