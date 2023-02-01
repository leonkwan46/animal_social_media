import React from "react";
import { Grid, Typography, Box } from "@mui/material";
// import { useEffect } from 'react';
// import { useState } from "react";
// import axios from "axios";
import { Message } from "./dummyData_fornotification";
import Notification from "./notification";
import "./notification.css";
const NotificationWindow = () => {
  return (
    <Grid
      container
      display="flex"
      direction="column"
      alignItems="stretch"
      className="notification-window"
      padding={3}
    >
      <Box sx={{ bgcolor: "#f9e6e6" }} className="notification-headers">
        <Typography>Notification</Typography>
      </Box>
      {Message.length > 0 ? (
        Message.map((p) => <Notification key={p.id} message={p} />)
      ) : (
        <Typography>You've caught up!</Typography>
      )}
    </Grid>
  );
};

export default NotificationWindow;
