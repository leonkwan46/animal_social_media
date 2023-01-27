import React from 'react';
// import axios from 'axios';
import { Box} from '@mui/system';
import { Typography, Grid, Avatar } from '@mui/material';

export default function Post(){
    return(
    
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      alignItems="stretch"
      maxWidth="sm"
    >
        <Box
        sx={{
            bgcolor:'#edeccc',
            boxShadow:3,
            borderRadius:2,
            padding: 3,
            marginBottom:4,
            border:1

        }}>
            <Grid container
            direction="row"
            >
            <Box 
            sx={{
                marginRight:2,
                marginBottom:2,
            }}>
                <Avatar 
                sx={{
                    bgcolor: '#c6aea1',
                    border: 1,
                }}> 
                M
                </Avatar>
                </Box>
                <Box 
                sx={{
                marginBottom:2,
                }}>
                <Typography 
                sx={{
                    fontWeight:'bold',
                    fontSize: 22,
                    fontFamily:'American Typewriter'}}
                    >
                    Mai
                </Typography>
                <Typography
                sx={{
                    fontWeight:'medium',
                    fontSize: 14,
                    }}
                    >
                        18 sec ago
                </Typography>
            </Box>
            </Grid>
            <Box
            sx={{
                bgcolor:'#FFFFFF',
                paddingBottom:4,
                paddingLeft:2,
                paddingTop:2,
                paddingRight:2,
                borderRadius:1,

            }}>
                <Typography>Meow Meow</Typography>
            </Box>
        </Box>

    </Grid>
    
    )
    }
