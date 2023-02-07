import {
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import "./ProfileEditForm.css";
import ProfilePicEdit from "./ProfilePicEdit/ProfilePicEdit";
import BgPicEdit from "./BgPicEdit/BgAddEdit";
import InfoEdit from "./InfoEdit/InfoEdit";

const ProfileEditForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Edit Profile
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <Box className="ProfileEditForm-dialog-wrap">
          <DialogTitle className="ProfileEditForm-dialog-item-wrap">Edit Profile</DialogTitle>
          <DialogContent>
            <Stack spacing={3} className="ProfileEditForm-dialog-title">
              
              <Card elevation={5} className="ProfileEditForm-card">
                <ProfilePicEdit />
              </Card>

              <Card elevation={5} className="ProfileEditForm-card">
                <BgPicEdit />
              </Card>

              <Card elevation={5} className="ProfileEditForm-card">
                <InfoEdit />
              </Card>

            </Stack>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
};

export default ProfileEditForm;
