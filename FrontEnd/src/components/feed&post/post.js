import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  Avatar,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Container,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { format } from "timeago.js";
import("./feed.css");

const Post = (props) => {
  return (
    <Container className="post">
      <Card
        sx={{
          bgcolor: "#f6d5d8",
        }}
        className="card-post"
      >
        <CardHeader
          sx={{
            marginRight: 2,
            marginBottom: 1,
          }}
          avatar={
            <Link
              to={"/profile/" + props.post.username}
              className="profile-button"
            >
              <Avatar
                sx={{
                  bgcolor: "#c6aea1",
                  border: 1,
                }}
              >
                {props.post.name.charAt(0)}
              </Avatar>
            </Link>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
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
            borderRadius: 1,
          }}
        >
          <Typography>{props.post.text}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Post;
