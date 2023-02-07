import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DialogListOfUsers from "../components/listOfUsers";
import ProfileEditForm from "../components/ProfileEditForm/ProfileEditForm";
import {
  Avatar,
  Card,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
  Box,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import { Container } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import CakeIcon from "@mui/icons-material/Cake";
import NotesIcon from "@mui/icons-material/Notes";
import Button from "@mui/material/Button";
import TopNav from "../components/TopNav/TopNav";
import "../components/ProfileEditForm/ProfileEditForm.css";

import axios from "axios";

const Profile = () => {
  const username = useParams().id;
  const [openUsers, setOpenUsers] = useState(false);
  const [openUnFollowPopup, setOpenUnFollowPopup] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [numOfFollowers, setnumOfFollowers] = useState(0);
  const [authFollow, setAuthFollow] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const [users, setUsers] = useState();
  
  useEffect(() => {
    setLoading(true);
    const getProfile = async () => {
      await axios
        .get("http://localhost:5000/profile/" + username, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setData(res.data);
          setnumOfFollowers(res.data.data.numOfFollowers);
          setAuthFollow(res.data.authFollow);
          setUsers(null);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getProfile();
  }, [username]);

  const getUsers = async (path) => {
    await axios
      .get("http://localhost:5000/network/" + path + "/" + username, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFollow = async () => {
    // follow if an action if true, otherwise false.
    const action = authFollow ? false : true;
    // Unfollow the user
    await axios
      .post(
        "http://localhost:5000/network/follow",
        { username: username, follow: action },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setnumOfFollowers(action ? numOfFollowers + 1 : numOfFollowers - 1);
        setAuthFollow(!authFollow);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxWidth={false} disableGutters>
      <TopNav />
      {loading ? <CircularProgress /> : ""}
      {loading ? (
        ""
      ) : (
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
                image={data?.data.coverPic}
              />
            </Card>

            <Avatar
              sx={{
                marginTop: "-125px",
                backgroundColor: "#AAAAAA",
                height: "250px",
                width: "250px",
              }}
              src={data?.data.profilePic}
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
                    {data ? (
                      <Typography>@{data.data.username}</Typography>
                    ) : null}
                  </Box>

                  <Box className="card-item-info">
                    <CakeIcon className="card-item-icon" />
                    {loading ? <Skeleton animation="wave" /> : null}
                    {error ? <Typography>{error}</Typography> : null}
                    {data ? <Typography>{data.data.date}</Typography> : null}
                  </Box>

                  <Box className="card-item-info">
                    {loading ? <Skeleton animation="wave" /> : null}
                    {error ? <Typography>{error}</Typography> : null}
                    {data ? (
                      <Box container="true" direction="row">
                        <button
                          onClick={() => {
                            setIsFollow(false);
                            getUsers("following");
                            setOpenUsers(true);
                          }}
                        >
                          {data.data.numOfFollowing} Following
                        </button>
                        <button
                          onClick={() => {
                            setIsFollow(true);
                            getUsers("followers");
                            setOpenUsers(true);
                          }}
                        >
                          {numOfFollowers} Followers
                        </button>
                        <DialogListOfUsers
                          open={openUsers}
                          setOpen={setOpenUsers}
                          followerOrFollowing={
                            isFollow ? "Followers" : "Following"
                          }
                          username={username}
                          name={data.data.name}
                          users={users}
                        />
                      </Box>
                    ) : null}
                  </Box>

                  {data?.sameUser ? (
                    ""
                  ) : (
                    <Box>
                      {authFollow ? (
                        <Box>
                          <Button
                            disabled={false}
                            size="small"
                            variant="outlined"
                            onClick={() => {
                              setOpenUnFollowPopup(true);
                            }}
                          >
                            Following
                          </Button>
                          <Dialog
                            open={openUnFollowPopup}
                            onClose={() => {
                              setOpenUnFollowPopup(false);
                            }}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              Unfollow {username}?
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                Posts from this user will no longer be shown in
                                your homepage.
                              </DialogContentText>
                              <DialogActions>
                                <Button
                                  onClick={() => {
                                    handleFollow();
                                    setOpenUnFollowPopup(false);
                                  }}
                                >
                                  Unfollow
                                </Button>
                                <Button
                                  onClick={() => {
                                    setOpenUnFollowPopup(false);
                                  }}
                                >
                                  Cancel
                                </Button>
                              </DialogActions>
                            </DialogContent>
                          </Dialog>
                        </Box>
                      ) : (
                        <Button
                          disabled={false}
                          size="small"
                          variant="contained"
                          onClick={() => {
                            handleFollow();
                          }}
                        >
                          Follow
                        </Button>
                      )}
                    </Box>
                  )}
                  <Box className="card-item-info">
                    <NotesIcon className="card-item-icon" />
                    {loading ? <Skeleton animation="wave" /> : null}
                    {error ? <Typography>{error}</Typography> : null}
                    {data ? <Typography>{data.data.bio}</Typography> : null}
                  </Box>
                </Box>
                {data?.sameUser ? <ProfileEditForm /> : ""}
              </Grid>
            </Card>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default Profile;
