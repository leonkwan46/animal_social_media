import { Avatar, Card, CardMedia, Grid, Skeleton, Typography} from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import TopNav from '../components/TopNav'
import useFetch from '../hooks/usefetch'

const Profile = () => {

  const { data, loading, error } = useFetch('http://localhost:5000/profile', {
    headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })


  return (
    <Container maxWidth={false} disableGutters>
        
        <TopNav />

        <Grid container justifyContent={"center"} sx={{width: "100%", height: "800px"}}>
          
          <Grid container justifyContent={"center"} spacing={1} sx={{padding: "5px", width: "80%", height:"100%", margin: "0px"}}>
              
              <Card elevation={3} sx={{width: "100%", height: "20%"}}>
                <CardMedia
                component="img"
                height="100%"
                src={require('../assets/images/20171102_111822001_iOS.jpg')}
                />
              </Card>

              <Avatar sx={{position:"", margin: "-120px", backgroundColor:"yellow", height: "250px", width: "250px", bottom: "500"}} alt='profile pic' src={require('../assets/images/cat.gif')} />

              <Card elevation={3} sx={{width: "100%", height: "80%"}}>
                <Grid container justifyContent={"center"} direction={"column"} alignItems={"center"} sx={{marginTop: "150px"}}>
                    <Typography>
                      {loading?(<Skeleton animation="wave" width={'50%'} />):null}
                      {error?(<Typography>{error}</Typography>):null}
                      {data?.data.name}
                    </Typography>
                    <Typography>
                      {loading?(<Skeleton animation="wave" width={'50%'} />):null}
                      {error?(<Typography>{error}</Typography>):null}
                      {data?.data.username}
                    </Typography>
                    <Typography>
                      {loading?(<Skeleton animation="wave" width={'50%'} />):null}
                      {error?(<Typography>{error}</Typography>):null}
                      {data?.data.bio}
                    </Typography>
                </Grid>
              </Card>

          </Grid>
        </Grid>
        
    </Container>
    


  )
}

export default Profile