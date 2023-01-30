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


  return (
    <Grid>
      <TopNav />
      <RegisterButton />
      <ProfileEditForm />
      <Button onClick={handleClick} >asd</Button>
      <ProfilePicEdit />
    </Grid>
  );
};

export default Test;
