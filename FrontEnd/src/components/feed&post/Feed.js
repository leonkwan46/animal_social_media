import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./post";
import { Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Container } from "@mui/system";
import "./feed.css";

const Feed = () => {
  const [status, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const backURL = "http://localhost:5000/homepage";
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        axios
          .get(backURL, {
            headers: {
              authorization: "Bearer " + accessToken,
            },
          })
          .then((res) => {
            const message = JSON.stringify(res.data);
            console.log(res.data);
            console.log(message);
            setData(res.data);
            setLoading(false);
          });
        console.log(status);
        console.log(status.length);
      } catch (err) {
        alert("Error retrieving data!!!");
      }
    };
    getData();
  }, []);

  return (
    // ({handleSubmit}) => {

    <div className="post-wrapper">
      <Box>
        {loading ? <CircularProgress /> : ""}
        {status.length > 0 ? (
          status.map((p) => <Post key={p._id} post={p} />)
        ) : loading ? (
          ""
        ) : (
          <Typography>There's no post!</Typography>
        )}
      </Box>
      <br />
      <Box>
        {!loading && status.length > 0 ? (
          <Typography> - That's all. - </Typography>
        ) : (
          <Typography></Typography>
        )}
      </Box>
    </div>
  );
};
//   )}}

export default Feed;
