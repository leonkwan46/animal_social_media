import Post from "./post";
import { Grid } from "@mui/material";
import {Posts} from './dummyData'



const Feed = () => {
    return(
        
        <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="stretch"
        maxWidth="sm">
            {Posts.map(p=>(
                <Post key={p.id} post={p}/>
            ))}
            
      </Grid>
        
    )
}

export default Feed