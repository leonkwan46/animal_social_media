import React, { useContext, useState } from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import { TextField, Button, Avatar } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import SendIcon from "@mui/icons-material/Send";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { SocketContext } from "../../shared/contexts/context";
import { UserContext } from "../../shared/contexts/username";
import CustomSnackbar from "../../shared/components/CustomSnackbar";
import "react-circular-progressbar/dist/styles.css";
import "./createPost.css";

const maxLength = 280;

const backURL = "http://localhost:5000/homepage";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={8} ref={ref} variant="filled" {...props} />;
});

const Post = ({ setRefreshFeed }) => {
  const [open, setOpen] = useState(false);
  const socket = useContext(SocketContext);
  const userInfo = useContext(UserContext);

  const onSubmit = async (values, { setValues }) => {
    try {
      if (values.length === 0) throw new Error("You need to write more than 1 letter!");
      await axios
        .post(
          backURL,
          { text: values.text },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        )
        .then((res) => {
          setOpen(true);
          setValues({ text: "", length: 0, percent: 0 });
          socket.emit("createPost", {
            senderName: res.data.name,
            action: "created a post",
            timestamp: res.data.createdAt
          });
          setRefreshFeed((prev) => !prev);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={{ text: "", length: 0, percent: 0 }}>
      {({ values, handleChange }) => (
        <Form className="post-wrapper">
          <div className="post-upper">
            <Avatar
              src={userInfo.profilePic ? userInfo.profilePic : null}
              alt={userInfo.username}
              className="profile-pic-for-post"
            />
            <TextField
              value={values.text}
              onChange={(e) => {
                values.text += e.target.value;
                values.length = e.target.value.length;
                values.percent = Math.floor((e.target.value.length / maxLength) * 100);
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
                  text={`${maxLength - values.length <= 30 ? maxLength - values.length : ""}`}
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
                    }`
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
            <CustomSnackbar open={open} setOpen={setOpen} message="Your post sent successfully!" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Post;
