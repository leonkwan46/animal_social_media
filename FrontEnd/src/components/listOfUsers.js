import { Link } from "react-router-dom";

import {
  Box,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography
} from "@mui/material";
const DialogListOfUsers = (props) => {
  return (
    <Box>
      <Dialog
        open={props.open}
        onClose={() => {
          props.setOpen(false);
        }}
      >
        <DialogTitle>{props.name + " " + props.followerOrFollowing}</DialogTitle>
        <DialogContent>
          <List>
            {props.users?.map((user) => (
              <ListItem disableGutters key={user.username}>
                <ListItemAvatar>
                  <Link
                    to={"/profile/" + user.username}
                    onClick={() => {
                      props.setOpen(false);
                    }}
                  >
                    <Avatar alt={user.username} src={user.profilePic} />
                  </Link>
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={
                    <Typography>
                      {user.username}
                      <br />
                      {user.bio}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DialogListOfUsers;
