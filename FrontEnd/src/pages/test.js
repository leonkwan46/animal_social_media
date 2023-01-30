import { Button, Grid } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileEditForm from "../components/ProfileEditForm/ProfileEditForm";
import ProfilePicEdit from "../components/ProfileEditForm/ProfilePicEdit/ProfilePicEdit";
import RegisterButton from "../components/RegisterButton/RegisterButton";
import TopNav from "../components/TopNav/TopNav";
import useFetch from "../hooks/usefetch";

const Test = () => {
  const id = localStorage.getItem('token')
  const nav = useNavigate();
  const handleClick = () => {
    nav(`/profile/${id}`)
  }

<<<<<<< HEAD

  return (
    <Grid>
      <TopNav />
      <RegisterButton />
      <ProfileEditForm />
      <Button onClick={handleClick} >asd</Button>
      <ProfilePicEdit />
    </Grid>
  );
=======
    // Have to use "data?", Because we are waiting for data to finish loading
    return (
        <Container maxWidth={false} disableGutters>
            <TopNav />
            
            <Box sx={{padding: '10% 10%'}}>
                <Typography variant='h4'>Username: </Typography> 
                {loading?<Skeleton animation="wave" width={'50%'} />:null}
                {error?(<Typography>{error}</Typography>):null}
                {data?.data.username}
                <Typography variant='h4'>Password: </Typography>
                {loading?<Skeleton animation="wave" width={'50%'} />:null}
                {error?(<Typography>{error}</Typography>):null}
                {data?.data.password}
            </Box>

        </Container>
    )
>>>>>>> developers
};

export default Test;
