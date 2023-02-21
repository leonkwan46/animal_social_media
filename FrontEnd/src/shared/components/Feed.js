import useFetch from "../hooks/usefetch";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Post from "./post";
import "./feed.css";

const Feed = ({ refreshFeed, setRefreshFeed }) => {
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
      {data?.length > 0 ? data.map((p) => <Post key={p._id} post={p} setRefreshFeed = {setRefreshFeed} />) : <Typography>There's no post!</Typography>}
    </div>
  );
};
//   )}}

export default Feed;
