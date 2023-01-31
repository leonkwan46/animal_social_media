import React, { useState } from "react";
import { Formik, Form } from "formik";

import profilePic from "../assets/images/charo.jpg";
import { TextField, Button, Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./createPost.css";

const user = {
  picture: profilePic,
  alt: "black-hand",
};

const maxLength = 280;

const Post = () => {
  const handleSubmit = (values) => {
    alert(values.text);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ text: "", length: 0, percent: 0 }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form className="post-wrapper">
          <div className="post-upper">
            <Avatar
              sx={{ width: "50px", height: "50px" }}
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
              variant="contained"
              size="medium"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Post;
