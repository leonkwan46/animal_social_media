import React from "react";
import { Grid, Typography,Box, Avatar} from "@mui/material";


const Notification = (message) =>{

    return(
        <Grid
            container
            direction="row"
            alignItems="center"
        >
                <Avatar sx= {{bgcolor: '#c6aea1', border: 1}} > 
                {message.message.username.charAt(0)}
                </Avatar>
                <Typography fontWeight="bold">{message.message.username}</Typography>
                <Typography> {message.message.action} </Typography>
                <Typography fontSize={14}> {message.message.timestamp} </Typography>
            
        </Grid>
    )
}

export default Notification