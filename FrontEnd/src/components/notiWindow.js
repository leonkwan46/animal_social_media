import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useEffect } from 'react';
import { useState } from "react";
// import axios from "axios";
// import {io} from 'socket.io-client'
// import { Message } from "./dummyData_fornotification";
import Notification from "./notification";
import "./notification.css";

const NotificationWindow = ({socket}) => {

    const[notification,setNotification] = useState([])
    useEffect(()=>{
        socket.on("getPost",data=>{
            console.log(data);
            setNotification((prev)=>[...prev,data])
        })
    },[socket,notification])
        console.log(notification)

    
    return(
        <Grid container 
            className="notification-window"
        >
            <Grid item sx={{ bgcolor : '#f9e6e6'}} className = "notification-headers">
                <Typography sx={{fontWeight: "bold "}}>  Notification</Typography>
            </Grid>
            <Box ></Box>
            <Grid item className="noti-all">
            
            {notification.length >0 ? notification.map(p=>(
                <Notification key = {p.senderName} message={p}/>)):
                <Typography>You've caught up!</Typography>}
            </Grid>
        </Grid>
    )
};

export default NotificationWindow
