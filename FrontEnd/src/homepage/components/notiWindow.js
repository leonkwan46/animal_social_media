import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useEffect, useRef } from 'react';
import { useState } from "react";
import axios from "axios";
// import {io} from 'socket.io-client'
// import { Message } from "./dummyData_fornotification";
import Notification from "./notification";
import "./notification.css";

const NotificationWindow = ({socket}) => {
  const usertoken = localStorage.getItem('token')
  const[notification,setNotification] = useState([])
  const notificationRef = useRef(notification);
  const backURL = "http://localhost:5000/homepage/noti";

  useEffect(() => {
      const getNoti = async() => {
        axios.get(backURL, {
          headers: {
            authorization: "Bearer " + usertoken,
          }
        })
        .then((res) => {
          setNotification(res.data);
        })
        .catch(err => console.err(err.message))
      };
      getNoti();
    }, []);
  
    useEffect(() => {
      socket.on("getPost", data => {
          console.log("ChatGPT helped me!")
        if(!notificationRef.current.includes(data.notification) && notificationRef.current !== null) {
          setNotification(prev => [...prev,data.notification]);
        }
        socket.emit("completed-notify", {
          usertoken,
          data: data
        });
      });

      socket.on("successFollowing", data => {
        console.log("OMG")
      if(!notificationRef.current.includes(data.notification) && notificationRef.current !== null) {
        setNotification(prev => [...prev,data.notification]);
      }
      socket.emit("completed-notify", {
        usertoken,
        data: data
      });
    });

    }, [notificationRef.current]); // Use the initial state as the dependency
    // Sort the notifications in ascending order by their timestamps
const sortedNotifications = notification.sort((a, b) => {
  const aTimestamp = new Date(a.timestamp).getTime();
  const bTimestamp = new Date(b.timestamp).getTime();
  return aTimestamp - bTimestamp;
});

    

    
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
            
            {notification.length >0 ? sortedNotifications.reverse().map(p=>(
                <Notification key = {p._id} message={p}/>)):
                <Typography>You've caught up!</Typography>}
            </Grid>
        </Grid>
    )
};

export default NotificationWindow
