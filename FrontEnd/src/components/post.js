import React from 'react';
import { Typography, Grid, Avatar, Card, CardHeader, IconButton, CardContent } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {format} from 'date-fns'

const Post = (props) => {
   
    console.log(props);
    return (<Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      maxWidth="sm"
    >
        <Card
        sx={{
            bgcolor:'#f6d5d8',
            boxShadow:3,
            borderRadius:2,
            padding: 1,
            marginBottom:4,
            border:1

        }}>
            <CardHeader
            sx={{
                marginRight:2,
                marginBottom:1,}}
            avatar={
                <Avatar 
                sx={{
                    bgcolor: '#c6aea1',
                    border: 1,
                }}> 
                {props.post.name.charAt(0)}
                </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                }
                title={props.post.name}
                subheader={format(new Date(props.post.createdAt),'MMM d,yyyy HH:mm')} />
            <CardContent
            sx={{
                bgcolor:'#FFFFFF',
                paddingBottom:4,
                paddingLeft:2,
                paddingTop:2,
                paddingRight:2,
                borderRadius:1,

            }}>
                <Typography>{props.post.message}</Typography>
            </CardContent>
        </Card>

    </Grid>
    
    
    )}

    export default Post