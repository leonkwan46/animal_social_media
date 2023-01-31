import React from 'react';
import { Typography, Grid, Avatar, Card, CardHeader, IconButton, CardContent } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {format} from 'date-fns'

const Post = (post) => {
   
    console.log(post);
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
                {post.post.name.charAt(0)}
                </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                }
                title={post.post.name}
                subheader={format(new Date(post.post.createdAt),'MMM d,yyyy HH:mm')} />
            <CardContent
            sx={{
                bgcolor:'#FFFFFF',
                paddingBottom:4,
                paddingLeft:2,
                paddingTop:2,
                paddingRight:2,
                borderRadius:1,

            }}>
                <Typography>{post.post.text}</Typography>
            </CardContent>
        </Card>

    </Grid>
    
    
    )}

    export default Post