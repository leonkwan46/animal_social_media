import React from 'react';
import { Typography, Grid, Avatar, Card, CardHeader, IconButton, CardContent, Container } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {format} from 'timeago.js'
import ('./feed.css')

const Post = (post) => {
   
    console.log(post);
    return (
    <Container
      className="post"
    >
        <Card 
        sx={{
            bgcolor:'#f6d5d8',
        }}
        className="card-post"
        >
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
                subheader={format(post.post.createdAt)} />
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

    </Container>
    
    
    )}

    export default Post