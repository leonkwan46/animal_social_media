import {
  Avatar,
  Card,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
  Box,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import TopNav from "../components/TopNav/TopNav";
import useFetch from "../hooks/usefetch";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import CakeIcon from "@mui/icons-material/Cake";
import NotesIcon from "@mui/icons-material/Notes";
import ProfileEditForm from "../components/ProfileEditForm/ProfileEditForm";
import "../components/ProfileEditForm/ProfileEditForm.css";

const Profile = () => {
  const { data, loading, error } = useFetch("http://localhost:5000/profile", {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  return (
    <Container maxWidth={false} disableGutters>
      <TopNav />

      <Box
        sx={{
          backgroundColor: "#DDDDDD",
          width: "100%",
          minHeight: "100vh",
          padding: "20px 0",
          display: "flex",
          justifyContent: "center",
          flex: 0,
          alignItems: "flex-start",
        }}
      >
        <Grid
          container
          spacing={1}
          justifyContent={"center"}
          sx={{ padding: "5px", width: "80%", margin: "0px" }}
        >
          <Card elevation={3} sx={{ width: "100%", height: "180px" }}>
            <CardMedia
              component="img"
              height="100%"
              src={require("../assets/images/20171102_111822001_iOS.jpg")}
            />
          </Card>

          <Avatar
            sx={{
              marginTop: "-125px",
              backgroundColor: "#AAAAAA",
              height: "250px",
              width: "250px",
            }}
            alt="profile pic"
            src={require("../assets/images/cat.gif")}
          />

          <Card
            elevation={3}
            sx={{
              backgroundColor: "white",
              width: "100%",
              minHeight: "500px",
              marginTop: "-115px",
            }}
          >
            <Grid
              container
              justifyContent={"center"}
              direction={"column"}
              alignItems={"center"}
              marginTop="125px"
              padding="5px"
            >
              <Box className="card-item-info-wrap">
                <Box className="card-item-info">
                  <AccountCircleIcon className="card-item-icon" />
                  {loading ? <Skeleton animation="wave" /> : null}
                  {error ? <Typography>{error}</Typography> : null}
                  {data ? <Typography>{data.data.name}</Typography> : null}
                </Box>
                <Box className="card-item-info">
                  <BadgeIcon className="card-item-icon" />
                  {loading ? <Skeleton animation="wave" /> : null}
                  {error ? <Typography>{error}</Typography> : null}
                  {data ? <Typography>@{data.data.username}</Typography> : null}
                </Box>

                <Box className="card-item-info">
                  <CakeIcon className="card-item-icon" />
                  {loading ? <Skeleton animation="wave" /> : null}
                  {error ? <Typography>{error}</Typography> : null}
                  {data ? <Typography>{data.data.date}</Typography> : null}
                </Box>

                <Box className="card-item-info">
                  <NotesIcon className="card-item-icon" />
                  {loading ? <Skeleton animation="wave" /> : null}
                  {error ? <Typography>{error}</Typography> : null}
                  {data ? <Typography>{data.data.bio}</Typography> : null}
                </Box>
              </Box>
              <ProfileEditForm />
            </Grid>
          </Card>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
