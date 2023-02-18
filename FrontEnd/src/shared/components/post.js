import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/username";
import { Link } from "react-router-dom";
import { Typography, Avatar, Card, CardHeader, IconButton, CardContent, Container, Popover } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { format } from "timeago.js";
import AlertPopup from "./AlertPopup/alertPopup";
import CustomSnackbar from "./CustomSnackbar";
import axios from "axios";
import("./feed.css");

const Post = (props) => {
  const backURL = "http://localhost:5000/homepage/" + props.post._id;
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const userInfo = useContext(UserContext);
  const isAuth = userInfo.username === props.post.username;

  const handleDelete = async () => {
    try {
      await axios
        .delete(backURL, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then((res) => {
          if (res.status === 200) {
            setOpen(true);
            props.setRefreshFeed((prev) => !prev);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="post">
      <Card
        sx={{
          bgcolor: "#f6d5d8"
        }}
        className="card-post"
      >
        <CardHeader
          sx={{
            marginRight: 2,
            marginBottom: 1
          }}
          avatar={
            <Link to={"/profile/" + props.post.username} className="profile-button">
              <Avatar
                sx={{
                  bgcolor: "#c6aea1",
                  border: 1
                }}
              >
                {props.post.name.charAt(0)}
              </Avatar>
            </Link>
          }
          action={
            <>
              <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <MoreVertIcon />
              </IconButton>
              {isAuth ? (
                <Popover
                  onClose={() => {
                    setAnchorEl(null);
                  }}
                  open={anchorEl}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                >
                  <AlertPopup
                    initialButtonText="Delete"
                    title="Are you sure you want to delete this post?"
                    description="This can not be undone and any users will have no access to this post."
                    buttonLeftText="Delete"
                    handleClose={() => setAnchorEl(null)}
                    handleLeftAction={() => {
                      handleDelete();
                    }}
                  />
                </Popover>
              ) : (
                ""
              )}
            </>
          }
          title={props.post.name}
          subheader={format(props.post.createdAt)}
        />
        <CardContent
          sx={{
            bgcolor: "#FFFFFF",
            paddingBottom: 4,
            paddingLeft: 2,
            paddingTop: 2,
            paddingRight: 2,
            borderRadius: 1
          }}
        >
          <Typography>{props.post.text}</Typography>
        </CardContent>
      </Card>
      <CustomSnackbar open={open} setOpen={setOpen} message="This post was deleted" />
    </Container>
  );
};

export default Post;
