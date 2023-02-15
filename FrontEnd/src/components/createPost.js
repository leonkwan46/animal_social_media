import React, { useState } from "react";
import { Formik, Form } from "formik";

import axios from "axios";

import profilePic from "../assets/images/charo.jpg";
import { TextField, Button, Avatar } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import SendIcon from "@mui/icons-material/Send";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SocketContext } from "./context";
import "./createPost.css";
import { useContext } from "react";

const user = {
  picture: profilePic,
  alt: "black-hand",
};

const maxLength = 280;

const backURL = "http://localhost:5000/homepage";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={8} ref={ref} variant="filled" {...props} />;
});

const Post = () => {
  const [open, setOpen] = React.useState(false);
  const socket = useContext(SocketContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  

  const onSubmit = async (values, { setValues }) => {
    try {
      if (values.length === 0)
        throw new Error("You need to write more than 1 letter!");
      await axios
        .post(
          backURL,
          { text: values.text },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
          
        )
        .then((res) => {
          console.log(res.status);
          console.log(res.data);
          handleOpen("Successfully post your message");
          setValues({ text: "", length: 0, percent: 0 });
          socket.emit("createPost",{
            senderName:res.data.name,
            action: "created a post",
            timestamp:res.data.createdAt,
            
          })
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{ text: "", length: 0, percent: 0 }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form className="post-wrapper">
          <div className="post-upper">
            <Avatar
              
              src={user.picture}
              alt={user.alt}
              className="profile-pic-for-post"
            />
            <TextField
              value={values.text}
              onChange={(e) => {
                values.text += e.target.value;
                values.length = e.target.value.length;
                values.percent = Math.floor(
                  (e.target.value.length / maxLength) * 100
                );
                handleChange(e);
              }}
              id="text"
              label="What's new with you?"
              className="post"
              multiline={true}
              inputProps={{ maxLength: maxLength }}
              fullWidth
            />
          </div>
          <div className="post-lower">
            <div className="circular-container">
              {values.length !== 0 ? (
                <CircularProgressbar
                  value={values.percent}
                  text={`${
                    maxLength - values.length <= 30
                      ? maxLength - values.length
                      : ""
                  }`}
                  strokeWidth="12"
                  styles={buildStyles({
                    textSize: "2em",
                    textWeight: "700",
                    pathColor: `${
                      maxLength - values.length < 10
                        ? "#ff3d00"
                        : maxLength - values.length < 30
                        ? "#ffff00"
                        : "#3e98c7"
                    }`,
                  })}
                />
              ) : (
                ""
              )}
            </div>
            <Button
              type="submit"
              disabled={values.length === 0 ? true : false}
              variant="contained"
              size="medium"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={2500}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <Alert onClose={handleClose} severity="info">
                This is a success message!
              </Alert>
            </Snackbar>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Post;
