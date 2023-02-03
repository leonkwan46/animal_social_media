import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileEditForm from "../components/ProfileEditForm/ProfileEditForm";
import ProfilePicEdit from "../components/ProfileEditForm/ProfilePicEdit/ProfilePicEdit";
import RegisterButton from "../components/RegisterButton/RegisterButton";
import TopNav from "../components/TopNav/TopNav";
import useFetch from "../hooks/usefetch";
import BgAddEdit from "../components/ProfileEditForm/BgPicEdit/BgAddEdit"
import axios from "axios";

const Test = () => {
  const id = localStorage.getItem('token')
  const nav = useNavigate();
  const handleClick = () => {
    nav(`/profile/${id}`)
  }

  const email = () => {
    axios.get("http://localhost:5000/register/verification")
    .then((res) => {
      console.log('====================================');
      console.log(res.data);
      console.log('====================================');
    })
  }


  return (
    <Grid>
      <TopNav />
      <RegisterButton />
      <ProfileEditForm />
      <Button onClick={handleClick} >asd</Button>
      {/* <BgAddEdit /> */}

      <Button variant="contained" onClick={email} > email </Button>
    </Grid>
  );
};

export default Test;
