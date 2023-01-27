import Post from "./post";
import { Grid } from "@mui/material";

export default function Feed(){
    return(
        <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="stretch"
        maxWidth="sm">
            <Post/>
            <Post/>
      </Grid>

    )
}