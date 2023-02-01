import { Box, Button, Skeleton, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import CakeIcon from "@mui/icons-material/Cake";
import NotesIcon from "@mui/icons-material/Notes";
import useFetch from "../../../hooks/usefetch";
import "./InfoEdit.css";

const InfoEdit = () => {
  const { data, loading, error } = useFetch("http://localhost:5000/profile", {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  return (
    <Box className="card-wrap">
      <Box className="card-header">
        <Typography className="card-header-text">Profile Info</Typography>
        <Button variant="outlined">Edit</Button>
      </Box>

      <Box className="card-item-info-wrap">
        <Box className="card-item-info">
          <AccountCircleIcon className="card-item-icon" />
          {loading ? <Skeleton animation="wave" /> : null}
          {error ? <Typography>{error}</Typography> : null}
          {data ? <Typography>{data.data.name}</Typography> : null}
        </Box>

        <Box className="card-item-info">
          <BadgeIcon className="card-item-icon" />
          {loading ? <Skeleton animation="wave" /> : null}
          {error ? <Typography>{error}</Typography> : null}
          {data ? <Typography>@{data.data.username}</Typography> : null}
        </Box>

        <Box className="card-item-info">
          <CakeIcon className="card-item-icon" />
          {loading ? <Skeleton animation="wave" /> : null}
          {error ? <Typography>{error}</Typography> : null}
          {data ? <Typography>{data.data.date}</Typography> : null}
        </Box>

        <Box className="card-item-info">
          <NotesIcon className="card-item-icon" />
          {loading ? <Skeleton animation="wave" /> : null}
          {error ? <Typography>{error}</Typography> : null}
          {data ? <Typography>{data.data.bio}</Typography> : null}
        </Box>
      </Box>
    </Box>
  );
};

export default InfoEdit;
