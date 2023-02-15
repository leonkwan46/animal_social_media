import useFetch from "../hooks/usefetch";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import Post from "./post";
import "./feed.css";
import axios from "axios";

const Feed = ({ refreshFeed }) => {
  const backURL = "http://localhost:5000/homepage";

  const { data, loading, error } = useFetch(
    backURL,
    {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token")
      }
    },
    refreshFeed
  );

  return (
    <div className="post-wrapper">
      {loading ? <CircularProgress /> : ""}
      {!loading && data && data.length > 0 ? (
        data.map((p) => <Post key={p._id} post={p} />)
      ) : loading ? (
        ""
      ) : (
        <Typography>There's no post!</Typography>
      )}
      <br />
      <Box>
        {!loading && data && data.length > 0 ? <Typography> - That's all. - </Typography> : <Typography></Typography>}
      </Box>
    </div>
  );
};
//   )}}

export default Feed;
