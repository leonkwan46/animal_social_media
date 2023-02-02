import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useEffect } from 'react';
// import { useState } from "react";
// import axios from "axios";
import io from 'socket.io-client'
import { Message } from "./dummyData_fornotification";
import Notification from "./notification";
import "./notification.css";

const NotificationWindow = () => {

    // useEffect(() =>{
    //     const socket = io("https://localhost:5000")
    //     console.log(socket)
    // },[])

    return(
        <Grid container 
            className="notification-window"
        >
            <Grid item sx={{ bgcolor : '#f9e6e6'}} className = "notification-headers">
                <Typography sx={{fontWeight: "bold "}}>  Notification</Typography>
            </Grid>
            <Box ></Box>
            <Grid item className="noti-all">
            {Message.length >0 ? Message.map(p=>(
                <Notification key={p.id} message={p}/>)):
                <Typography>You've caught up!</Typography>}
            </Grid>
        </Grid>
    )
};

export default NotificationWindow
