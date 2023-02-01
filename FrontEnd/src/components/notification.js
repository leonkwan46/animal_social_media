import React from "react";
import { Typography,Box, Avatar, Grid} from "@mui/material";
import "./notification.css"
import { Container } from "@mui/system";


const Notification = (message) =>{

    return(
        <Grid container spacing={5}
            className = "notification-body"
        >       <Grid item>
                <Avatar sx= {{bgcolor: '#c6aea1'}} className="avatar-pro" > 
                {message.message.username.charAt(0)}
                </Avatar>
                </Grid>
                <Grid item maxWidth="sm" className="noti-all">
                <Typography fontWeight="bold">{message.message.username}</Typography>
                <Typography fontSize={16}> {message.message.action} </Typography>
                <Typography fontSize={12}> {message.message.timestamp} </Typography>
                </Grid>
            
        </Grid>
    )
}

export default Notification