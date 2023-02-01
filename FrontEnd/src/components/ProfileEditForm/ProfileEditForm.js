import {
  Avatar,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import CakeIcon from "@mui/icons-material/Cake";
import NotesIcon from "@mui/icons-material/Notes";
import useFetch from "../../hooks/usefetch";
import "./ProfileEditForm.css";
import ProfilePicEdit from "./ProfilePicEdit/ProfilePicEdit";
import BgPicEdit from "./BgPicEdit/BgAddEdit";

const ProfileEditForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { data, loading, error } = useFetch("http://localhost:5000/profile", {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Edit Profile
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <Box className="dialog-wrap">
          <DialogTitle className="dialog-title">Edit Profile</DialogTitle>
          <DialogContent>
            <Stack spacing={3} className="dialog-item-wrap">
              
              <Card elevation={5} className="card">
                    <ProfilePicEdit />
              </Card>

              <Card elevation={5} className="card">                
                    <BgPicEdit />
              </Card>

              <Card elevation={5} className="card">
                <Box className="card-wrap">
                  <Box className="card-header">
                    <Typography className="card-header-text">
                      Profile Info
                    </Typography>
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
                      {data ? (
                        <Typography>@{data.data.username}</Typography>
                      ) : null}
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
              </Card>
            </Stack>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
};

export default ProfileEditForm;
