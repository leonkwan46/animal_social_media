import React from "react";
import { Typography,Box, Avatar, Grid} from "@mui/material";
import "./notification.css"
import { Container } from "@mui/system";
import { format } from "timeago.js";


const Notification = (message) =>{

    return(
        <Grid container spacing={5}
            className = "notification-body"
        >       <Grid item>
                <Avatar sx= {{bgcolor: '#c6aea1'}} className="avatar-pro" > 
                {message.message.sendername.charAt(0)}
                </Avatar>
                </Grid>
                <Grid item maxWidth="sm" className="noti-all">
                <Typography fontWeight="bold">{message.message.sendername}</Typography>
                <Typography fontSize={16}> {message.message.action} </Typography>
                <Typography fontSize={12}> {format(message.message.createdAt)} </Typography>
                </Grid>
            
        </Grid>
    )
}

export default Notification