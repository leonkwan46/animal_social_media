import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileEditForm from "../components/ProfileEditForm/ProfileEditForm";
import ProfilePicEdit from "../components/ProfileEditForm/ProfilePicEdit/ProfilePicEdit";
import RegisterButton from "../components/RegisterButton/RegisterButton";
import TopNav from "../components/TopNav/TopNav";
import useFetch from "../hooks/usefetch";
import BgAddEdit from "../components/ProfileEditForm/BgPicEdit/BgAddEdit"

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
      <BgAddEdit />
    </Grid>
  );
};

export default Test;
