import useFetch from "../hooks/usefetch";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import Post from "./post";
import "./feed.css";

const Feed = () => {
  const backURL = "http://localhost:5000/homepage";

  const { data, loading, error } = useFetch(backURL, {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token")
    }
  });

  return (
    <div className="post-wrapper">
      <Box>
        {loading ? <CircularProgress /> : ""}
        {!loading && data && data.length > 0 ? (
          data.reverse().map((p) => <Post key={p._id} post={p} />)
        ) : loading ? (
          ""
        ) : (
          <Typography>There's no post!</Typography>
        )}
      </Box>
      <br />
      <Box>
        {!loading && data && data.length > 0 ? <Typography> - That's all. - </Typography> : <Typography></Typography>}
      </Box>
    </div>
  );
};
//   )}}

export default Feed;
